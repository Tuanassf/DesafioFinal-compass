const CarsRepository = require('../repository/CarsRepository');

class CarsService {
  async create(payload) {
    const receivedData = await CarsRepository.create(payload);
    return receivedData;
  } 
  async find(payload) {
    const allCars = await CarsRepository.find(payload);
    return allCars;
  }
  async findOne(payload) {
    const car = await CarsRepository.findOne(payload);
    return car;
  }
  async update(id, payload) {
    const result = await CarsRepository.update(id, payload)
      return result;    
  }
  async delete(payload) {
    const car = await CarsRepository.delete(payload);
    return car;
  }  
}

module.exports = new CarsService();