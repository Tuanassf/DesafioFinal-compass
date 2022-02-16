/* eslint-disable class-methods-use-this */
const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
  async create(payload, data) {
    return RentalSchema.create(payload, data);
  }

  async find(payload) {
    const myCustomLabels = {
      totalDocs: 'total',
      docs: 'locadoras',
      limit: 'perPage',
      page: 'currentPage',
      nextPage: 'next',
      prevPage: 'prev',
      totalPages: 'totalPages',
      pagingCounter: false,
      meta: false
    };

    const options = {
      page: 1,
      limit: 10,
      offset: 20,
      customLabels: myCustomLabels
    };
    return RentalSchema.paginate(payload, options);
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
