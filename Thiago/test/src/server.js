const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config();

const routes = require("./routes");

class app {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
        this.dbConnect()
    }

    middlewares(){
        this.express.use(express.json);
    }
    routes(){
        this.express.use(routes);
    }
    dbConnect(){
        mongoose.connect("mongodb+srv://thiago:Rock2011%40rock2011@cluster0.x8jfy.mongodb.net/cluster0?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        })
    }


}

module.exports = new app().express;