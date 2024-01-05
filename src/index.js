import 'dotenv/config';
import express from 'express';
import routes from './routes.js';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3000, function () {
    console.log('Servidor ok...');
});