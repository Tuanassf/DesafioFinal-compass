class Errors {
  notFound(res, message) {
    return res.status(404).json({
      description: 'Not Found',
      name: message
    });
  }

  badRequest(res, message) {
    return res.status(400).json({
      description: 'Bad Request',
      name: message
    });
  }
}

module.exports = new Errors();
