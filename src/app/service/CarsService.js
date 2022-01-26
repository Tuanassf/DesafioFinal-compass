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
  
}

module.exports = new CarsService();