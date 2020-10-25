const { MongoClient } = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017';

const createConnection = async () => await MongoClient.connect(url);
// Connect using MongoClient

module.exports = createConnection;