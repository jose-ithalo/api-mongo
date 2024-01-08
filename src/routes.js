import { Router } from 'express';
import { showData, register, deleteData } from './controllers/employees.js';

const routes = Router();

routes.get('/', showData);

routes.post('/employee', register);

routes.delete('/employee/:id', deleteData);

export default routes;