/* eslint-disable no-throw-literal */
const Joi = require('joi')
  .extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string()
        .required(),

      cpf: Joi.string()
        .pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)
        .min(11)
        .max(14)
        .required(),

      data_nascimento: Joi.date()
        .max('1-1-2004')
        .format('DD/MM/YYYY' || 'YYYY/MM/DD'),

      email: Joi.string()
        .email()
        .required(),

      senha: Joi.string()
        .min(6)
        .required(),

      habilitado: Joi.string()
        .required(),
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });

    if (error) {
      throw {
        message: error.message,
      };
    }
    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
