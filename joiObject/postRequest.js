const request = require('request');

request.post(
  'http://localhost:8003/login',
  { json: { isGuest: false, username: 'hapi', password: 'makemehapi' } },
  (error, response, body) => {
    console.log(body);
  },
);
