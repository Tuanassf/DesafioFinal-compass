/* eslint-disable class-methods-use-this */
const RentalService = require('../service/RentalService');

class RentalController {
  async create(req, res) {
    try {
      const result = await RentalService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(404).json({
        message: error.message
      });
    }
  }

  async getAllRentals(req, res) {
    const requestedData = req.query;
    try {
      const allRentals = await RentalService.find(requestedData);
      return res.status(200).json(allRentals);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async findById(req, res) {
    const { id } = req.params;
    try {
      const result = await RentalService.findOne(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async updateRental(req, res) {
    const { id } = req.params;
    const dataToUpdate = req.body;
    try {
      const updatedRental = await RentalService.update(id, dataToUpdate);
      return res.status(200).json(updatedRental);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async deleteRental(req, res) {
    const { id } = req.params;
    try {
      await RentalService.delete({ _id: id });
      return res.status(204).end();
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }
}
module.exports = new RentalController();
