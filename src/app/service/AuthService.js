/* eslint-disable class-methods-use-this */
const AuthRepository = require('../repository/AuthRepository');

class AuthService {
  async findOne(payload) {
    return AuthRepository.findOne(payload);
  }
}

module.exports = new AuthService();
