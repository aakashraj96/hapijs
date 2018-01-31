const axios = require('axios');
const server = require('./index.js');

describe('Testing if server is responding', () => {
  test('is delicious', () => {
    axios.get('http://localhost:8080')
      .then((response) => {
        expect(response).toBe('Hello hapi');
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
