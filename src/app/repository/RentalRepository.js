/* eslint-disable class-methods-use-this */
const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
  async create(payload, data) {
    return RentalSchema.create(payload, data);
  }

  async find(payload) {
    const myCustomLabels = {
      totalDocs: 'total',
      docs: 'Locadoras',
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
    return RentalSchema.paginate(payload, options, {});
  }

  async findOne(id) {
    return RentalSchema.findOne({ _id: id });
  }

  async update(id, payload) {
    return RentalSchema.findByIdAndUpdate(id, payload, { new: true });
  }

  async delete(id) {
    return RentalSchema.findByIdAndDelete(id);
  }
}
module.exports = new RentalRepository();
