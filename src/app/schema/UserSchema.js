const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    data_nascimento: {
        type: Date,
        required: true,
    },
    email: {
        type: String, 
          required: true 
    },
    senha: {
        type: String,
        required: true,
    },
    habilitado: {
        type: String,
        enum: ['sim', 'não'],
        required: true,
    } 
})

const users = mongoose.model('User', UserSchema)
module.exports = users;
