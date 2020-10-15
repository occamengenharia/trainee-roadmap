//REALIZAR A MANIPULÇÃO DO BANCO DE DADOS COM O MONGOCLI

const { MongoClient } = require('mongodb');

// url de conexão
const url = 'mongodb://localhost:27017';

const createConnection = async () => await MongoClient.connect(url);

module.exports = createConnection;