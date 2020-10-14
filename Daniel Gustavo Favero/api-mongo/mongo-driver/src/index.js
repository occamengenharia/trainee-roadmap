const app = require('./server');

const port = 3333;

app.listen(process.env.MONGO_URL || port, () => console.log(`server running in port ${port}`));