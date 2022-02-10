/* eslint-disable class-methods-use-this */
const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
  async create(payload) {
    return RentalSchema.create(payload);
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
      meta: false,
    };

    const options = {
      page: 1,
      limit: 10,
      offset: 20,
      customLabels: myCustomLabels,
    };
    return RentalSchema.paginate(payload, options);
  }
}
module.exports = new RentalRepository();
