/* eslint-disable class-methods-use-this */
const RentalService = require('../service/RentalService');

class RentalController {
  async create(req, res) {
    try {
      const result = await RentalService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(404).json({
        message: 'Erro ao acessar a rota',
      });
    }
  }
}
module.exports = new RentalController();
