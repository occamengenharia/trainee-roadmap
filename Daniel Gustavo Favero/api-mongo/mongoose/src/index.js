const app = require('./server.js');

app.listen(process.env.MONGO_URL || 3333);