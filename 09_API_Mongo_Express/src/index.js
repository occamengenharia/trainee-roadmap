const app = require('./server');

app.listen(process.env.MONGO_URL || 3333);