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
    if (!car) {
      throw new Error('Car not found');
    }
    return car;
  }

  async update(id, payload) {
    const result = await CarsRepository.update(id, payload);
    if (result === null) {
      throw new Error('Car not found');
    }
    return result;
  }

  async updateAcessories(id, acessoryId, payload) {
    const result = await CarsRepository.updateAcessories(id, acessoryId, payload);
    return result;
  }

  async delete(id) {
    const car = await CarsRepository.delete(id);
    return car;
  }
}

module.exports = new CarsService();
