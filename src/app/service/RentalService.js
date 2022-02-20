const RentalRepository = require('../repository/RentalRepository');
const GetCep = require('../helpers/GetCep');

class RentalService {
  async create(payload, data) {
    for (let i = 0; i < payload.endereco.length; i++) {
      const ceps = payload.endereco;
      const result = ceps[i];
      const info = await GetCep.getCep(result.cep);
      const { cep, logradouro, complemento, bairro, localidade, uf } = info;
      result.cep = cep;
      result.logradouro = logradouro;
      result.complemento = complemento;
      result.bairro = bairro;
      result.localidade = localidade;
      result.uf = uf;
    }
    const result = await RentalRepository.create(payload, data);
    return result;
  }

  async find(payload) {
    const allRentals = await RentalRepository.find(payload);
    return allRentals;
  }

  async findOne(payload) {
    const rental = await RentalRepository.findOne(payload);
    if (!rental) {
      throw new Error('Rental not found');
    }
    return rental;
  }

  async update(id, payload) {
    const result = await RentalRepository.update(id, payload);
    if (result === null) {
      throw new Error('Rental not found');
    }
    return result;
  }

  async delete(id) {
    const rental = await RentalRepository.delete(id);
    if (!rental) {
      throw new Error('Rental not found');
    }
    return rental;
  }
}
module.exports = new RentalService();
