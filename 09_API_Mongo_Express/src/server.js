const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const routes = require('./routes');

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.dbConnect();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }

  dbConnect() {
    mongoose.connect('mongodb://localhost:27017/trainee-mongoose', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }


  
}

module.exports = new App().express;