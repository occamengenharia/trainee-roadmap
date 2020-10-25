
const mongoose = require('../database/index')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    email: {
        type:String,
        unique:true,
        required:true,
        lowercase:true,
    },
    password:{
        type: String,
        required:true,
        select:false,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;