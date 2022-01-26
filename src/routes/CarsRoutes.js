const CarController = require('../app/controllers/CarController');
const createValidation = require('../app/validations/Cars/create');


module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', createValidation, CarController.create);
  server.use(prefix, routes);
}