const { Router } = require('express');

const EventController = require('./controllers/EventController');

const routes = Router();

const eventController = new EventController();

routes.post('/', eventController.create);
routes.get('/', eventController.list);

module.exports = routes;