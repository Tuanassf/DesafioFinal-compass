const UserRepository = require('../repository/UserRepository');

class UserService {
  async create(payload) {
    const receivedData = await UserRepository.create(payload);
    return receivedData;
  }
 
  
}

module.exports = new UserService();