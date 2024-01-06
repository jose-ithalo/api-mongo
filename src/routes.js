import { Router } from 'express';
import { showData, register } from './controllers/employees.js';

const routes = Router();

routes.get('/', showData);

routes.post('/employee', register);

export default routes;