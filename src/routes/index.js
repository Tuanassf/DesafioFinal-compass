const { Router } = require('express');
const car = require('./CarsRoutes');
const user = require('./UserRoutes');
const rental = require('./RentalRoutes');

module.exports = (server) => {
  server.use((req, res, next) => {
    car(server, new Router());
    user(server, new Router());
    rental(server, new Router());
    next();
  });
};
