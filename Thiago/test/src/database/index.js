const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://thiago:Rock2011%40rock2011@cluster0.x8jfy.mongodb.net/cluster0?retryWrites=true&w=majority', 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true});

module.exports = mongoose;