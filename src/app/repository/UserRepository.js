const UserSchema = require ('../schema/UserSchema')

class UserRepository  {
    async create(payload) {
      return UserSchema.create(payload);
    }
    async find(payload) {
      return UserSchema.find(payload);
    }
    async findOne(payload) {
      return UserSchema.findOne({ payload });
    }
    /*async update(id, payload) {
      await UserSchema.updateOne({ _id: id }, payload);
      return UserSchema.findOne({ _id: id });
    }
    async delete(payload) {
      return UserSchema.deleteOne(payload);
    }*/
    
  }
  
  module.exports = new UserRepository();