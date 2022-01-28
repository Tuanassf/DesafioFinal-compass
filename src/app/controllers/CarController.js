const CarsService = require('../service/CarsService');

class CarController  {
  async create(req, res) {
    try {
      const result = await CarsService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message }).send(error.message)
    }
  }
  async getAllCars(req, res) {
    try {
      const modelo = req.query.modelo
      const cor = req.query.cor
      const ano = req.query.ano
      const acessorios = req.query.acessorios
      const quantidadePassageiros = req.query.quantidadePassageiros

      if (modelo) {
        const allCars = await CarsService.find({
          modelo: {
            $regex: modelo
          }
        });
        
        if (!allCars.length) {
          return res.status(404).json({
            message: "Car not found!"
          });
        }
        return res.status(200).json(allCars);
      } else {
        const allCars = await CarsService.find({});
        return res.status(200).json({ 'veículos':allCars });
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  /*async getAllCars(req, res) {
    try {
      const allCars = await CarsService.find()
      return res.status(200).json({'veículos':allCars})
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }*/
  async findById (req, res) {
    const { id } = req.params
    try {
      const result = await CarsService.findOne(id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({
        'message': 'bad request',
        'details': [{ 'message': error.message }]
      })
     
    }
  }
  async updateCar(req, res) {
    const id = req.params.id;
    const dataToUpdate = req.body; 
    try {
        const updatedCar = await CarsService.update(id, dataToUpdate);
        res.status(200).json(updatedCar);
    } catch (error) {
      return res.status(400).json({
        'message': 'bad request',
        'details': [{ 'message': error.message }]
      })
    }
  }
  async deleteCar(req, res) {
    try {
      const id = req.params.id;
      const car = await CarsService.find({ _id: id });

      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      await CarsService.delete({ _id: id });
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({
        'message': 'Bad request',
        'details': [{ 'message': error.message }]
      });
    }
  }
}

module.exports = new CarController();