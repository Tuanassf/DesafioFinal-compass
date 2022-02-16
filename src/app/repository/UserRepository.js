/* eslint-disable class-methods-use-this */
const UserSchema = require('../schema/UserSchema');

class UserRepository {
  async create(payload) {
    return UserSchema.create(payload);
  }

  async find(payload) {
    return UserSchema.find(payload);
  }

  async findOne(id) {
    return UserSchema.findOne({ _id: id });
  }

  async update(id, payload) {
    return UserSchema.findByIdAndUpdate(id, payload, { new: true });
  }

  async delete(id) {
    return UserSchema.findByIdAndDelete(id);
  }
}
module.exports = new UserRepository();
