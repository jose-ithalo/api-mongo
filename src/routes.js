import { Router } from 'express';
import { showTeste, register } from './controllers/employees.js';

const routes = Router();

routes.get('/', showTeste);

routes.post('/employee', register);

export default routes;