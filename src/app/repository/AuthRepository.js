/* eslint-disable class-methods-use-this */
const UserSchema = require('../schema/UserSchema');

class AuthRepository {
  async findOne(payload) {
    return UserSchema.findOne(payload).select('+senha');
  }
}
module.exports = new AuthRepository();
