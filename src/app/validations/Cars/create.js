/* eslint-disable no-throw-literal */
const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      modelo: Joi.string()
        .required(),

      cor: Joi.string()
        .required(),

      ano: Joi.number()
        .min(1950)
        .max(2022)
        .required(),

      acessorios: Joi.array()
        .items(Joi.object().min(1).required())
        .required(),

      quantidadePassageiros: Joi.number()
        .required(),
    });

    const { error } = await schema.validate(req.body, { abortEarly: true });

    if (error) {
      throw {
        message: 'Bad Request',
        details: error.details,
      };
    }
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
