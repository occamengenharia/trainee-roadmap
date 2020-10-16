const { isValidObjectId } = require('mongoose');
const { findOne } = require('../models/User');
const User = require('../models/User');
const createConnection = require('../service/mongo');


class UserController {
    /**
     * CRUD
     * - Crete
     * - Read / Show
     * - Update 
     * - Delete
     */ // NUNCA DEVE TER MAIS DO QUE ESSES 5 MÉTODOS NO CONTROLLER !!


    async list(request, response) {


        //mongoose
        const usersMongoose = await User.find();

        return response.json(usersMongoose);
    }

    async show(request, response) {
        const { id } = request.params;

        if (!isValidObjectId(id)) {
            return response.status(401).json({ error: 'não foi possível localizar usuario!' });
        }

        const existsUser = await User.findById(id);

        if (!existsUser) {
            return response.status(401).json({ error: 'não foi possível localizar usuario!' });
        }

        return response.json(existsUser);
    }

    async create(request, response) {
        const {
            nome,
            cpf,
            celular,
            email,
        } = request.body;

        const existsUsers = await User.findOne({ cpf: `${cpf}` });

        if (existsUsers) {
            return response.status(401).json({ error: 'não foi possivel cadastrar' });
        }

        const user = await User.create(request.body);

        return response.json(user);
    }

    async update(request, response) {

        const { id } = request.params;

        if (!isValidObjectId(id)) {
            return response.status(401).json({ error: 'não foi possível localizar usuario!' });
        }

        const userUpdated = await User.findByIdAndUpdate(id, request.body, {
            new: true
        });

        if (!userUpdated) {
            return response.status(401).json({ error: 'não foi possível localizar usuario!' });
        }

        return response.json(userUpdated);
    }

    async delete(request, response) {
        const { id } = request.params;

        if (!isValidObjectId(id)) {
            return response.status(401).json({ error: 'não foi possível localizar usuario!' });
        }

        // retorna o usuario que foi apagado
        const userUpdated = await User.findByIdAndDelete(id);

        // caso não ExtensionScriptApis, quer dizer que não achou na busca
        if (!userUpdated) {
            return response.status(401).json({ error: 'não foi possível localizar o usuario!' });
        }

        return response.json({ success: 'usuario apagado com sucesso' });
    }

}

module.exports = UserController;