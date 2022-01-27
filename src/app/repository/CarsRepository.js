const CarsSchema = require ('../schema/CarsSchema')

class CarsRepository  {
    async create(payload) {
      return CarsSchema.create(payload);
    }
    async find(payload) {
      return CarsSchema.find(payload);
    }
    async delete(payload) {
      return CarsSchema.deleteOne(payload);
    }
  }
  
  module.exports = new CarsRepository();