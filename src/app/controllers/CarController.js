const CarsService = require('../service/CarsService');

class CarController  {
  async create(req, res) {
    try {
      const result = await CarsService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message }).send(error.message)
    }
  }
}

module.exports = new CarController();