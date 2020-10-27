const { Router } = require('express');

const EventController = require('./controllers/EventController');

const routes = Router();

const eventController = new EventController();

routes.post('/events', eventController.create);
routes.get('/events', eventController.list);
routes.get('/events/:id', eventController.show);
routes.put('/events/:id', eventController.update);
routes.delete('/events/:id', eventController.delete);

module.exports = routes;