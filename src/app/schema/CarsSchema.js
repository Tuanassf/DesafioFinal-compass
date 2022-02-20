const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CarsSchema = mongoose.Schema(
  {
    modelo: {
      type: String,
      required: true
    },
    cor: {
      type: String,
      required: true
    },
    ano: {
      type: Number,
      required: true
    },
    acessorios: [
      {
        descricao: String
      }
    ],
    quantidadePassageiros: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false
  }
);

CarsSchema.plugin(mongoosePaginate);

const cars = mongoose.model('cars', CarsSchema);
module.exports = cars;
