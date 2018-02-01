
const http = require('http');

const Server = require('./index.js');

describe('Test hapi server for a return file', () => {
  const options = {
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
      // expect(response.result).toBe('Hello aakash');
      // console.log(response);
      done();
    });
  });
  test('testing if response result is not empty', (done) => {
    Server.inject(options, (response) => {
      // expect(response.statusCode).toBe(200);
      expect(response.result.toString().length).not.toBe(0);
      // console.log(response);
      done();
    });
  });
  test('testing for returned file contents', (done) => {
    Server.inject(options, (response) => {
      // expect(response.statusCode).toBe(200);
      expect(response.result.toString()).toBe('<html>\n    <head><title>Hello Handling</title></head>\n    <body>\n        Hello Handling\n    </body>\n</html>\n');
      // console.log(response);
      done();
    });
  });
});
