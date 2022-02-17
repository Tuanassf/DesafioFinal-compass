const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ error: 'No token provided' });

  const tokenParts = authHeader.split(' ');

  if (!tokenParts.length === 2) return res.status(401).send({ error: 'Token error' });

  const [scheme, token] = tokenParts;

  if (!/Bearer$/i.test(scheme)) return res.status(401).send({ error: 'Token isn´t on rigth format' });

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Invalid token' });

    req.userId = decoded.id;
    return next();
  });
};