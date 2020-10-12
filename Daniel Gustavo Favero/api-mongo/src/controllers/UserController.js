const { connect } = require('http2');
const { isValidObjectId } = require('mongoose');
const User = require('../models/User');

//controlar todas as ações da rota "Users"

class UserController {
    //criar usuário
    async create(request, response) {
        //criar o registro no banco de dados
        //o request.body tem todas as informações do corpo da requisição
        const user = await User.create(request.body);

        return response.json(user);
    }

    //mostrar apenas um usuário
    async show(request, response) {
        const { id } = request.params;

        //verificar se o id foi informado de forma válida
        if (!isValidObjectId(id)) {
            return response.status(401).json({ error: "id informado é inválido" });
        }

        //buscar o usuário no banco de dados
        const existUser = await User.findById(id);

        //verificar se o id existe
        if (!existUser) {
            return response.status(401).json({ error: "usuário não encontrado" })
        }

        return response.json(existUser);
    }

    //mostrar todos os usuários
    async list(request, response) {
        //recuparar todos os usuários do banco de dados
        const users = await User.find();

        return response.json(users);
    }

    //atualizar um usuário
    async update(request, response) {
        const { id } = request.params;

        //verificar se o id foi informado de forma válida
        if (!isValidObjectId(id)) {
            return response.status(401).json({ error: "id informado é inválido" });
        }

        const updatedUser = await User.findByIdAndUpdate(id, request.body, {
            new: true //retornar o evento atualizado
        });

        //verificar se o id existe
        if (!updatedUser) {
            return response.status(401).json({ error: "usuário não encontrado" })
        }

        return response.json(updatedUser);
    }

    //deletar um usuáiro
    async delete(request, response) {
        const { id } = request.params;

        //verificar se o id foi informado de forma válida
        if (!isValidObjectId(id)) {
            return response.status(401).json({ error: "id informado é inválido" });
        }

        const deletedUser = await User.findByIdAndDelete(id);

        //verificar se o id existe
        if (!deletedUser) {
            return response.status(401).json({ error: "usuário não encontrado" })
        }

        return response.json({ sucess: "usuário removido com sucesso!" });
    }

}

module.exports = UserController;