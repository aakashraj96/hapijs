const Hapi = require('hapi');


const server = new Hapi.Server();
server.connection({ port: 8001, host: 'localhost' });
server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    reply('');
  },
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
