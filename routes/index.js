const Hapi = require('hapi');


const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: 8080, host: 'localhost' });
server.route({
  path: '/{name}',
  method: 'GET',
  handler: (request, reply) => {
    // console.log(request);
    reply(`Hello ${request.params.name}`);
  },
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
