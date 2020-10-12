const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

const userController = new UserController();

//criar usuário
routes.post('/users', userController.create);

//listar apenas um usuário
routes.get('/users/:id', userController.show);

//listar usuários
routes.get('/users/', userController.list);

//atualizar usuário
routes.put('/users/:id', userController.update);

//deletar usuário
routes.delete('/users/:id', userController.delete);

module.exports = routes;