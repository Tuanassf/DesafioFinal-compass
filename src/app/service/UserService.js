const UserRepository = require('../repository/UserRepository');

class UserService {
  async create(payload) {
    const receivedData = await UserRepository.create(payload);
    return receivedData;
  }
 
  /*async findAll (payload) {
    const result = await UserRepository.findAll({
      _id: payload.id,
      modelo: payload.modelo,
      cor: payload.cor,
      ano: payload.ano,
      acessorios: payload.acessorios,
      quantidadePassageiros: payload.quantidadePassageiros,
    })
    return result;
  }*/
 
  async find(payload) {
    const allUsers = await UserRepository.find(payload);
    return allUsers;
  }
  async findOne(payload) {
    const user = await UserRepository.findOne(payload);
    return user;
  }
  async update(id, payload) {
    const result = await UserRepository.update(id, payload)
    return result;
  }

  async delete(payload) {
    const user = await UserRepository.delete(payload);
    return user;
  }
}

module.exports = new UserService();