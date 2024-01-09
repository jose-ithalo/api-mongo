import { Router } from 'express';
import { showData, register, deleteData, updateData } from './controllers/employees.js';

const routes = Router();

routes.get('/', showData);

routes.post('/employee', register);

routes.delete('/employee/:id', deleteData);

routes.put('/employee/:id', updateData);

export default routes;