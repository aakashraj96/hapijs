const Vision = require('vision');
const Hapi = require('hapi');
const path = require('path');
const Handlebars = require('handlebars');

const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: 8003, host: 'localhost' });

server.register(Vision, (err) => {
  if (err) throw err;
});
server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    // console.log(request.query);
    reply.view('index', { message: request.query.name });
  },
});
server.views({
  engines: {
    html: Handlebars,
  },
  path: path.join(__dirname, 'templates'),
});

server.start((err) => {
  console.log(err);


  console.log('Server running at:', server.info.uri);
});

module.exports = server;
