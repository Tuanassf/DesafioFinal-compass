/* eslint-disable class-methods-use-this */
const RentalRepository = require('../repository/RentalRepository');

class RentalService {
  async create(payload) {
    const receivedData = await RentalRepository.create(payload);
    return receivedData;
  }
}
module.exports = new RentalService();
