
const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: 8004, host: 'localhost' });

server.route({
  path: '/login',
  method: 'POST',
  handler: (request, reply) => {
    // console.log(request.payload);
    reply('login successful');
  },
  config: {
    validate: {
      payload: Joi.object({
        isGuest: Joi.boolean().required(),
        username: Joi.string()
          .when('isGuest', {
            is: false,
            then: Joi.required(),
          }),
        password: Joi.string().alphanum(),
        accessToken: Joi.string().alphanum(),
      })
        .options({ allowUnknown: true })
        .without('password', 'accessToken'),
    },
  },
});
server.start((err) => {
  console.log(err);
  console.log('Server running at:', server.info.uri);
});
module.exports = server;
