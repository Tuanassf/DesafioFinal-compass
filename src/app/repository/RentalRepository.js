/* eslint-disable class-methods-use-this */
const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
  async create(payload) {
    return RentalSchema.create(payload);
  }
}
module.exports = new RentalRepository();
