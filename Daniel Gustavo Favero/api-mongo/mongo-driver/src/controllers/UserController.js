const { ObjectID } = require('mongodb');
const createConnection = require('../service/mongo');

class UserController {
    //criar usuário
    async create(request, response) {
        try {
            //iniciar conexão com o banco de dados
            const connection = await createConnection();

            //inserir no banco de dados
            await connection.db('usuarios-driver').collection('usuarios').insertOne({ ...request.body, createdAt: new Date() });

            //fechar conexão com o banco de dados
            await connection.close();

            return response.json({ sucess: 'Usuário inserido com sucesso!' });
        } catch (err) {
            //informar se ocorreu algum erro
            return response.json({ error: `Não foi possível inserir usuario. ${err}` });
        }
    }

    async list(request, response) {
        const connection = await createConnection();

        const users = await connection.db('usuarios-driver').collection('usuarios').find({}).toArray();

        await connection.close();

        if (users.length == 0) {
            return response.json({ warning: "Não há usuários cadastrados" })
        }

        return response.json(users);
    }

    async show(request, response) {
        //recuperar o id dos parametros da rota
        const { id } = request.params;

        const connection = await createConnection();

        //pesquisar usuário pelo id
        const user = await connection.db('usuarios-driver').collection('usuarios').findOne({ _id: ObjectID(id) });

        await connection.close();

        //não foi encontrado usuário
        if (!user) {
            return response.status(401).json({ error: "Usuário não existe" });
        }

        //mostrar o usuário em tela
        return response.json(user);
    }

    async update(request, response) {
        const { id } = request.params;

        const connection = await createConnection();

        //atualizar as informações do corpo da requisição
        const updatedUser = await connection.db('usuarios-driver').collection('usuarios').findOneAndUpdate({ _id: ObjectID(id) }, { $set: request.body });

        await connection.close();

        if (!updatedUser) {
            return response.status(401).json({ error: "Usuário não existe" });
        }

        return response.json(updatedUser);
    }

    async delete(request, response) {
        const { id } = request.params;

        const connection = await createConnection();

        const deletedUser = await connection.db('usuarios-driver').collection('usuarios').findOneAndDelete({ _id: ObjectID(id) });

        await connection.close();

        if (!deletedUser) {
            return response.status(401).json({ error: "Usuário não existe" });
        }

        return response.json({ sucess: "Usuário removido com sucesso" });
    }
}

module.exports = UserController;