
const Hapi = require('hapi');
const path = require('path');
const rot13 = require('rot13-transform');

const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: 8003, host: 'localhost' });


server.start((err) => {
  console.log(err);


  console.log('Server running at:', server.info.uri);
});
module.exports = server;
