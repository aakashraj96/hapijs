const Vision = require('vision');
const Hapi = require('hapi');
const path = require('path');
const Handlebars = require('handlebars');

const server = new Hapi.Server();
// server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });
server.connection({ port: 8003, host: 'localhost' });


module.exports = server;
