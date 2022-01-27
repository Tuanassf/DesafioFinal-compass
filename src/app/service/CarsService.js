const CarsRepository = require('../repository/CarsRepository');

class CarsService {
  async create(payload) {
    const receivedData = await CarsRepository.create({
      'modelo': payload.modelo,
      'cor': payload.cor,
      'ano': payload.ano,
      'acessorios': payload.acessorios,
      'quantidadePassageiros': payload.quantidadePassageiros      
    });
    return receivedData;
  }
  async find(payload) {
    const allCars = await CarsRepository.find(payload);
    return allCars;
  }
  async findAll (payload) {
    const result = await CarsRepository.findAll({
      _id: payload.id,
      modelo: payload.modelo,
      cor: payload.cor,
      ano: payload.ano,
      acessorios: payload.acessorios,
      quantidadePassageiros: payload.quantidadePassageiros,
    })
    return result
  }
  async delete(payload) {
    const car = await CarsRepository.delete(payload);
    return car;
  }

}

module.exports = new CarsService();