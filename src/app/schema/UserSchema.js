const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const bycript = require('bcrypt');

const UserSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  data_nascimento: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true,
    select: false
  },
  habilitado: {
    type: String,
    enum: ['sim', 'não'],
    required: true
  }
});

UserSchema.pre('save', async function (next) {
  const hash = await bycript.hash(this.senha, 10);
  this.senha = hash;

  next();
});

UserSchema.plugin(mongoosePaginate);

const users = mongoose.model('User', UserSchema);
module.exports = users;
