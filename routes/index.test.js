
const http = require('http');

const Server = require('./index.js');

describe('ping controller', () => {
  const options = {
    method: 'GET',
    url: '/?name=aakash',
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

  test('responds with success for ping', (done) => {
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      expect(response.result).toBe('Hello hapi');
      done();
    });
  });
});
