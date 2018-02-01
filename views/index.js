const Vision = require('vision');
const Hapi = require('hapi');
const path = require('path');
const Handlebars = require('handlebars');

const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: 8003, host: 'localhost' });
server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    // console.log(request.query);
    reply('sucess');
  },
});

server.start((err) => {
  console.log(err);


  console.log('Server running at:', server.info.uri);
});

module.exports = server;
