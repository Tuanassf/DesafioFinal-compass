/* eslint-disable class-methods-use-this */
const RentalRepository = require('../repository/RentalRepository');
const GetCep = require('../helpers/GetCep');

class RentalService {
  async create(payload, data) {
    for (let i = 0; i < payload.endereco.length; i++) {
      const ceps = payload.endereco;
      const result = ceps[i];
      const data = await GetCep.getCep(result.cep);
      const { cep, logradouro, complemento, bairro, localidade, uf } = data;
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
    const car = await RentalRepository.findOne(payload);
    return car;
  }

  async update(id, payload) {
    const result = await RentalRepository.update(id, payload);
    return result;
  }

  async delete(payload) {
    const car = await RentalRepository.delete(payload);
    return car;
  }
}
module.exports = new RentalService();