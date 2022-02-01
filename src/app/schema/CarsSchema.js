const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CarsSchema = mongoose.Schema({
    modelo: {
        type: String,
        required: true,
    },
    cor: {
        type: String,
        required: true,
    },
    ano: {
        type: Number,
        required: true,
    },
    acessorios: 
        { type: Array, 
          required: true 
    },
    quantidadePassageiros: {
        type: Number,
        required: true,
    }
})

CarsSchema.plugin(mongoosePaginate);

const cars = mongoose.model('cars', CarsSchema)
module.exports = cars;