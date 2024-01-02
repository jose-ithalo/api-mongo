import express from 'express';

const server = express();

server.use(express.json());

server.listen(3000, function () {
    console.log('Servidor ok...');
});