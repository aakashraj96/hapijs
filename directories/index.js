const Inert = require('inert');
const Hapi = require('hapi');
const path = require('path');

const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: 8002, host: 'localhost' });

server.register(Inert, (err) => {
  if (err) throw err;
});
server.route({
  path: '/foo/bar/baz/{param}',
  method: 'GET',
  handler: {
    directory: {
      path: path.join(__dirname, '/public'),
    },
  },
});

server.start((err) => {
  console.log(err);
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
