/* eslint-disable class-methods-use-this */
const RentalRepository = require('../repository/RentalRepository');

class RentalService {
  async create(payload) {
    const receivedData = await RentalRepository.create(payload);
    return receivedData;
  }

  async find(payload) {
    const allRentals = await RentalRepository.find(payload);
    return allRentals;
  }
  async findOne(payload) {
    const car = await RentalRepository.findOne(payload);
    return car;
  }
  async update(id, payload) {
    const result = await RentalRepository.update(id, payload);
    return result;
  }
}
module.exports = new RentalService();
