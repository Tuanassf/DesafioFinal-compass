const CarController = require('../app/controllers/CarController');
const Validation = require('../app/validations/Cars/create');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', Validation, CarController.create);
  routes.get('/', CarController.getAllCars);
  routes.get('/:id', CarController.findById);
  routes.put('/:id', Validation, CarController.updateCar);
  routes.patch('/:id/acessorios/:acessoryId', CarController.updateAcessories);
  routes.delete('/:id', CarController.deleteCar);

  server.use(prefix, routes);
};
