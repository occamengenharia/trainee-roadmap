//realizar a conexão com o banco de dados
const { MongoClient } = require('mongodb');

//url de conexão
const url = 'mongodb://localhost:27017';

//criar conexão com o banco de dados
const createConnection = async () => await MongoClient.connect(url);

module.exports = createConnection;