import 'dotenv/config';
import express from 'express';
import connectDataBase from './dataBase/connection.js';
import routes from './routes.js';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3000, function () {
    console.log('Servidor ok...');
});

connectDataBase()
    .then(() => { console.log('Mongoose conectado.'); })
    .catch(() => { console.log('Não conectado'); })