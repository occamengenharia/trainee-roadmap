const{ MongoClient } = require("mongodb")

const url = 'mongodb+srv://thiago:Rock2011%40rock2011@cluster0.x8jfy.mongodb.net/cluster0?retryWrites=true&w=majority'

const createConnection = async() => await MongoClient.connect(url)

module.exports = createConnection