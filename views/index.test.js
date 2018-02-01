const Server = require('./index.js');

describe('Test hapi server for a return file', () => {
  let options = {
    method: 'GET',
    url: '/',
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
      console.log('got a response!!');
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('testing if server returns a view', (done) => {
    Server.inject(options, (response) => {
      console.log('got a view!');
      expect(response.result.toString()).toContain('<html>');
      done();
    });
  });

  options = {
    method: 'GET',
    url: '/?name=aakash',
  };
  test('testing if server returns a dynamic view with parameters passed in URL', (done) => {
    Server.inject(options, (response) => {
      console.log('Expecting response to contain aakash');
      expect(response.result.toString()).toContain('aakash');
      done();
    });
  });
});
