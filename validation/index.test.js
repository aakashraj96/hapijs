const Server = require('./index.js');

describe('Test hapi server for a return file', () => {
  let options = {
    method: 'GET',
    url: '/chickens/breed',
  };

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
  test('testing if response status code is 200', (done) => {
    Server.inject(options, (response) => {
      // console.log('got a response!!', response);
      expect(response.statusCode).toBe(200);
      done();
    });
  });


  test('testing if server returns a response', (done) => {
    options = {
      method: 'GET',
      url: '/chickens',
    };
    Server.inject(options, (response) => {
      console.log('got a response');
      expect(response.result.toString().length).not.toBe(0);
      done();
    });
  });

  test('testing if server is validating breed', (done) => {
    options = {
      method: 'GET',
      url: '/chickens',
    };
    Server.inject(options, (response) => {
      console.log('not paasing a breed, expected output: 404');
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  test('testing if server is validating breed', (done) => {
    options = {
      method: 'GET',
      url: '/chickens/someBreed',
    };
    Server.inject(options, (response) => {
      console.log('paasing a breed, expected output: success!');
      expect(response.result).toBe('success!');
      done();
    });
  });
});
