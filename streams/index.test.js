const Server = require('./index.js');

describe('Test hapi server for a return file', () => {
  const options = {
    method: 'GET',
    url: '/',
  };


  test('testing if response status code is 200', (done) => {
    Server.inject(options, (response) => {
      console.log('got a response!!');
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});