import { Router } from 'express';

const routes = Router();

routes.get('/', function (req, res) {
    return res.status(200).json('Arquivo de rotas');
});

export default routes;