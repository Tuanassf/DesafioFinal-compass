/* eslint-disable class-methods-use-this */
const CarsSchema = require('../schema/CarsSchema');

class CarsRepository {
  async create(payload) {
    return CarsSchema.create(payload);
  }

  async find(payload) {
    const myCustomLabels = {
      totalDocs: 'total',
      docs: 'veículos',
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
    return CarsSchema.paginate(payload, options);
  }

  async findOne(id) {
    return CarsSchema.findOne({ _id: id });
  }

  async update(id, payload) {
    await CarsSchema.updateOne({ _id: id }, payload);
    return CarsSchema.findOne({ _id: id });
  }

  async updateAcessories(id, acessoryId, payload) {
    return CarsSchema.findByIdAndUpdate(
      id,
      { $set: { 'acessorios.$[none].descricao': payload.descricao } },
      { arrayFilters: [{ 'none._id': acessoryId }] }
    );
  }

  async delete(payload) {
    return CarsSchema.deleteOne(payload);
  }
}
module.exports = new CarsRepository();
