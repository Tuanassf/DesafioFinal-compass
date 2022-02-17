const UserController = require('../app/controllers/UserController');
const UserAuthenticate = require('../app/controllers/UserAuthenticate');
const Validation = require('../app/validations/User/create');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', Validation, UserController.create);
  routes.post('/authenticate', UserAuthenticate.authenticateUser);
  routes.get('/', UserController.getAllUsers);
  routes.get('/:id', UserController.findUserById);
  routes.put('/:id', UserController.updateUser);
  routes.delete('/:id', UserController.deleteUser);

  server.use(prefix, routes);
};
