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
}
module.exports = new RentalService();
