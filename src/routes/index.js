const { Router } = require('express');
const car = require('../routes/CarsRoutes')
const user = require ('../routes/UserRoutes')

module.exports = server => {
  server.use((req, res, next) => {
    car(server, new Router());
    user(server, new Router());
    next();
  });
}