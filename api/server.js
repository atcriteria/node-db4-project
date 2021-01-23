const express = require('express');
const ModelRouter = require('./router');
const server = express();

server.use(express.json());
server.use('/api/recipes', ModelRouter);

module.exports = server;