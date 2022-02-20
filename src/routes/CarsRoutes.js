const CarController = require('../app/controllers/CarController');
const Validation = require('../app/validations/Cars/create');
const token = require('../middlewares/auth');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', token, Validation, CarController.create);
  routes.get('/', token, CarController.getAllCars);
  routes.get('/:id', token, CarController.findById);
  routes.put('/:id', token, Validation, CarController.updateCar);
  routes.patch('/:id/acessorios/:acessoryId', token.apply, CarController.updateAcessories);
  routes.delete('/:id', token, CarController.deleteCar);

  server.use(prefix, routes);
};
