const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connect();
  }

  // eslint-disable-next-line class-methods-use-this
  connect() {
    const db = process.env.DATABASE || 'mongodb://127.0.0.1:27017/cars';
    return mongoose.connect(db);
  }
}

module.exports = new Database().connect();
