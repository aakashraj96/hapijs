const Inert = require('inert');
const Hapi = require('hapi');
const path = require('path');

const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: 8001, host: 'localhost' });


server.start((err) => {
  console.log(err);
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
