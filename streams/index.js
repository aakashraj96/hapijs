
const Hapi = require('hapi');
const path = require('path');
const rot13 = require('rot13-transform');
const fs = require('fs');

const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });

server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    // console.log(request.query);
    const readFile = fs.createReadStream(path.join(__dirname, 'testFile.txt'));
    console.log(readFile);
    reply(readFile.pipe(rot13()));
    // reply('testing');
  },
});

server.start((err) => {
  console.log(err);


  console.log('Server running at:', server.info.uri);
});
module.exports = server;
