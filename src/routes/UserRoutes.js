const UserController = require('../app/controllers/UserController')


module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', UserController.create);
  routes.get('/',  UserController.getAllUsers);
  /*routes.get('/:id', UserController.findById)
  routes.put('/:id',  UserController.updateUser);
  routes.delete('/:id',  UserController.deleteUser);*/

  
  server.use(prefix, routes);
}