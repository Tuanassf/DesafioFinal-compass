/* eslint-disable class-methods-use-this */
const { Error } = require('mongoose');
const UserRepository = require('../repository/UserRepository');

class UserService {
  async create(payload) {
    const receivedData = await UserRepository.create(payload);
    return receivedData;
  }

  async find(payload) {
    const allUsers = await UserRepository.find(payload);
    return allUsers;
  }

  async findOne(payload) {
    const user = await UserRepository.findOne(payload);
    if (user === null) {
      throw new Error('User not found');
    }
    return user;
  }

  async update(id, payload) {
    const result = await UserRepository.update(id, payload);
    if (result === null) {
      throw new Error('User not found');
    }
    return result;
  }

  async delete(payload) {
    const user = await UserRepository.delete(payload);
    return user;
  }
}

module.exports = new UserService();
