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
    const data = await UserRepository.update(id, {
      'name': payload.name,
      'cpf': payload.cpf,
      'data_nascimento': payload.data_nascimento,
      'email': payload.email,
      'habilitado': payload.habilitado,
    })
    const result = {
      '_id': data._id,
      'name': data.name,
      'cpf': data.cpf,
      'data_nascimento': data.data_nascimento,
      'email': data.email,
      'habilitado': data.habilitado
    }

    return result;
  }

  async delete(payload) {
    const user = await UserRepository.delete(payload);
    return user;
  }
}

module.exports = new UserService();