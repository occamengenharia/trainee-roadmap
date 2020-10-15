const { Router } = require('express');

const UserController = require('./controllers/UserController');

const routes = Router();


const userController = new UserController();

routes.post('/users', userController.create);
routes.get('/users', userController.list);
routes.get('/users/:cpf', userController.show);
routes.put('/users/:cpf', userController.update);
routes.delete('/users/:cpf', userController.delete);

module.exports = routes;