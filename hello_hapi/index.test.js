
const axios = require('axios');
const server = require('./index.js');
const http = require('http');

// describe('Testing if server is responding', () => {
//   test('Expecting Hello hapi response from server', (done) => {
//     axios.get('http://localhost:8080')
//       .then((response) => {
//         expect(response).toBe('Hello hapi');
//         done();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// });

// describe('Testing if server is responding', () => {
//   test('Expecting Hello hapi response from server', (done) => {
//     http.get('http://localhost:8001/', (response) => {
//       response.on('data', (data) => {
//         expect(data).toBe('Hello hapi');
//         done();
//       });
//       response.on('error', (err) => {
//         console.log(err);
//       });
//     });
//   });
// });

const Server = require('./index.js');

describe('ping controller', () => {
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

  test('responds with success for ping', (done) => {
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      expect(response.result).toBe('Hello hapi');
      done();
    });
  });
});
