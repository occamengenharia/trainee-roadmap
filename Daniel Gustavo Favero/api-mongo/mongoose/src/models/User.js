const mongoose = require('mongoose');

//esquema dos dados a serem armazenados no banco de dados
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    cpf: {
        type: Number
    },
    celular: {
        type: Number
    },
    email: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema);