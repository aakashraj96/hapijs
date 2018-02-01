const Inert = require('inert');
const Hapi = require('hapi');
const path = require('path');

const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });


server.start(() => {
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
