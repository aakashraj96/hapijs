const http = require('http');

http.get('http://localhost:8001/', (response) => {
  response.on('data', (data) => {
    console.log(data.toString());
  });
  response.on('error', (err) => {
    console.log(err);
  });
});
