const CarsSchema = require ('../schema/CarsSchema')

class CarsRepository  {
    async create(payload) {
      return CarsSchema.create(payload);
    }
    async find(payload) {
      return employeesSchema.find(payload);
    }
  }
  
  module.exports = new CarsRepository();