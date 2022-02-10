const RentalController = require('../app/controllers/RentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', RentalController.create);
  routes.get('/', RentalController.getAllRentals);
  routes.get('/:id', RentalController.findById);
  routes.put('/:id', RentalController.updateRental);
  routes.delete('/:id', RentalController.deleteRental);
  server.use(prefix, routes);
};
