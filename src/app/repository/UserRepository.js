/* eslint-disable class-methods-use-this */
const UserSchema = require('../schema/UserSchema');

class UserRepository {
  async create(payload) {
    return UserSchema.create(payload);
  }

  async find(payload) {
    const myCustomLabels = {
      totalDocs: 'total',
      docs: 'Users',
      page: 'offset',
      nextPage: false,
      prevPage: false,
      totalPages: 'offsets',
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false
    };
    const options = {
      page: 1,
      limit: 100,
      customLabels: myCustomLabels
    };
    return UserSchema.paginate(payload, options, {});
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
