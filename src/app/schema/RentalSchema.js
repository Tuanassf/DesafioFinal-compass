const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    unique: true,
    required: true,
  },
  atividades: {
    type: String,
    required: true,
  },
  endereco: [
    {
      cep: String,
      number: Number,
      complemento: String,
      isFilial: Boolean,
    },
  ],
});

RentalSchema.plugin(mongoosePaginate);
/* RentalSchema.path('endereco').options; */

const rental = mongoose.model('rental', RentalSchema);
module.exports = rental;
