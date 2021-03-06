const CarsService = require('../service/CarsService');

class CarController {
  async create(req, res) {
    try {
      const result = await CarsService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  async getAllCars(req, res) {
    const requestedData = req.query;
    try {
      const allCars = await CarsService.find(requestedData);
      return res.status(200).json(allCars);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async findById(req, res) {
    const { id } = req.params;
    try {
      const result = await CarsService.findOne(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async updateCar(req, res) {
    const { id } = req.params;
    const dataToUpdate = req.body;
    try {
      const updatedCar = await CarsService.update(id, dataToUpdate);
      return res.status(200).json(updatedCar);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async updateAcessories(req, res) {
    const { id, acessoryId } = req.params;
    const dataToUpdate = req.body;
    try {
      const updatedAcessories = await CarsService.updateAcessories(id, acessoryId, dataToUpdate);
      return res.status(200).json(updatedAcessories);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async deleteCar(req, res) {
    const { id } = req.params;
    try {
      await CarsService.delete({ _id: id });
      return res.status(204).end();
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }
}

module.exports = new CarController();
