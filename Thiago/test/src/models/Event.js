const Moongoose = require("mongoose");

const EventSchema = new Moongoose.Schema({
    organizador_id: {
        type: String,
    },
    nome:{
        type: String,
    },
    data:{
        type: String,
    },
    local:{
        type: String,
    },
    createdAt: {
        type: Date,
        defaut: Date.now(),
    },
});