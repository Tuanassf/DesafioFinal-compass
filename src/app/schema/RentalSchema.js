const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    unique: true,
    required: true
  },
  atividades: {
    type: String,
    required: true
  },
  endereco: [
    {
      cep: String,
      number: String,
      complemento: String,
      logradouro: String,
      bairro: String,
      localidade: String,
      uf: String,
      isFilial: Boolean
    }
  ]
});

RentalSchema.plugin(mongoosePaginate);

const rental = mongoose.model('rental', RentalSchema);
module.exports = rental;
