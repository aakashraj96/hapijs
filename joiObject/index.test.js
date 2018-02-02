const Server = require('./index.js');
const request = require('request');

describe('Test hapi server for a return file', () => {
  beforeAll((done) => {
    Server.on('start', () => {
      done();
    });
  });

  afterAll((done) => {
    Server.on('stop', () => {
      done();
    });
    Server.stop();
  });
  // test('testing if response status code is 200', (done) => {
  //   Server.inject(options, (response) => {
  //     // console.log('got a response!!', response);
  //     expect(response.statusCode).toBe(200);
  //     done();
  //   });
  // });
  test('testing for success code', (done) => {
    request.post(
      'http://localhost:8004/login',
      { json: { isGuest: false, username: 'hapi', password: 'makemehapi' } },
      (error, response, body) => {
        console.log(body);
        expect(response.statusCode).toBe(200);
        done();
      },
    );
  });

  test('testing for validation', (done) => {
    request.post(
      'http://localhost:8004/login',
      { json: { isGuest: false, username: 'hapi', password: 'makemehapi' } },
      (error, response, body) => {
        console.log(body);
        expect(body).toBe('login successful');
        done();
      },
    );
  });

  test('Passing password and accessToken together, Expected: bad request', (done) => {
    request.post(
      'http://localhost:8004/login',
      {
        json: {
          isGuest: false, username: 'hapi', password: 'makemehapi', accessToken: '1234abcd',
        },
      },
      (error, response, body) => {
        console.log(response.statusCode);
        expect(response.statusCode).toBe(400);
        done();
      },
    );
  });

  test('Trying to not pass username when isguest is false, Expected: bad request', (done) => {
    request.post(
      'http://localhost:8004/login',
      {
        json: {
          isGuest: false, password: 'makemehapi',
        },
      },
      (error, response, body) => {
        console.log(response.statusCode);
        expect(response.statusCode).toBe(400);
        done();
      },
    );
  });
});
