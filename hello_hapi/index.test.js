const axios = require('axios');
const server = require('./index.js');

describe('my beverage', () => {
  test('is delicious', () => {
    axios.get('http://localhost:8000')
      .then((response) => {
        expect(response).toBe('Hello hapi');
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
