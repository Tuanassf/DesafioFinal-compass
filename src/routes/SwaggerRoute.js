const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const doc = require('../../openapi.json');

router.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(doc));

module.exports = router;
