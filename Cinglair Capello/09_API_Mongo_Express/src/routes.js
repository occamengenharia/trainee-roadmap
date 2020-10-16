const { Router } = require('express');

const UserController = require('./controllers/UserController');

const routes = Router();


const userController = new UserController();

routes.post('/users', userController.create);
routes.get('/users', userController.list);
routes.get('/users/:id', userController.show);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

module.exports = routes;