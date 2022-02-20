/* eslint-disable class-methods-use-this */
const CarsSchema = require('../schema/CarsSchema');

class CarsRepository {
  async create(payload) {
    return CarsSchema.create(payload);
  }

  async find(payload) {
    const myCustomLabels = {
      totalDocs: 'total',
      docs: 'Veiculos',
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
    return CarsSchema.paginate(payload, options, {});
  }

  async findOne(id) {
    return CarsSchema.findOne({ _id: id });
  }

  async update(id, payload) {
    return CarsSchema.findByIdAndUpdate(id, payload, { new: true });
  }

  async updateAcessories(id, acessoryId, payload) {
    return CarsSchema.findByIdAndUpdate(
      id,
      { $set: { 'acessorios.$[none].descricao': payload.descricao } },
      { arrayFilters: [{ 'none._id': acessoryId }] }
    );
  }

  async delete(id) {
    return CarsSchema.findByIdAndDelete(id);
  }
}
module.exports = new CarsRepository();
