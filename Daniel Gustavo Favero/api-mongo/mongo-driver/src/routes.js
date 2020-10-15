const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

const userController = new UserController();

//criar um usuário
routes.post('/users', userController.create);

//listar usuários
routes.get('/users', userController.list);

//listar apenas um usuário
routes.get('/users/:id', userController.show);

//atualizar usuário
routes.put('/users/:id', userController.update);

//deletar usuário
routes.delete('/users/:id', userController.delete);


module.exports = routes;