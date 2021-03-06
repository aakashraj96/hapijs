
const Hapi = require('hapi');
const path = require('path');
const rot13 = require('rot13-transform');
const fs = require('fs');
const Joi = require('joi');

const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: 8003, host: 'localhost' });

server.route({
  path: '/chickens/{breed}',
  method: 'GET',
  handler: (request, reply) => {
    console.log(request.params.breed);
    reply('success!');
  },
  config: {
    validate: {
      params: {
        breed: Joi.string().required(),
      },
    },
  },
});

server.start((err) => {
  console.log(err);


  console.log('Server running at:', server.info.uri);
});
module.exports = server;
