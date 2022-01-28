const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        unique: true,
        required: true,
    },
    data_nascimento: {
        type: Date,
        required: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true, 
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },
    habilitado: {
        type: String,
        enum: ['sim', 'não'],
        required: true,
    } 
})

const users = mongoose.model('User', UserSchema)
module.exports = users;
