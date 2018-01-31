
const Hapi = require('hapi');

// const server = new Hapi.Server({
//   host: 'localhost',
//   port: Number(process.argv[2] || 8080),
// });

const server = new Hapi.Server();
server.connection({ port: 8001, host: 'localhost' });
server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    reply('Hello hapi');
  },
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});

// module.exports = server;
// process.on('uncaughtException', (err) => {
//   console.log(err);
// });
