const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    cpf: {
        type: String,
    },
    nome: {
        type: String,
    },
    celular: {
        type: String,
    },
    email: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('User', UserSchema);