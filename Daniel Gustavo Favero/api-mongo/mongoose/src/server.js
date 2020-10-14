const express = require('express');
const mongoose = require('mongoose'); //linguagem para manipular o banco de dados em js
const routes = require('./routes');

require('dotenv').config();

//classe que carrega toda a funcionalidade da aplicação backend
class App {
    constructor() {
        this.express = express();

        //inicializar todos os métodos na inicialização da classe
        this.middlewares();
        this.routes();
        this.dbconnect();
    }

    middlewares() {
        //fazer o express entender json
        this.express.use(express.json());
    }

    //usar as rotas definidas no arquivos routes.js
    routes() {
        this.express.use(routes);
    }

    //realizar a conexão com o banco de dados
    dbconnect() {
        mongoose.connect('mongodb://localhost:27017/usuarios', {
            //configurações para iniciar a conexão com o banco de dados
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
    }
}

module.exports = new App().express;