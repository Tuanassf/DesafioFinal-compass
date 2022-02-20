const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim().required(),
      cpf: Joi.string()
        .pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)
        .min(11)
        .max(14)
        .required()
        .messages({
          'string.base': 'Invalid type, cpf must be a string'
        }),

      data_nascimento: Joi.date()
        .max('1-1-2004')
        .format('DD/MM/YYYY' || 'YYYY/MM/DD'),
      email: Joi.string().trim().email().required(),
      senha: Joi.string().trim().min(6).required(),
      habilitado: Joi.string().valid('sim', 'nao').required()
    });

    const { error } = await schema.validate(req.body, { abortEarly: false, allowUnknown: false });

    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json({
      description: error.details[0].path[0],
      name: error.message
    });
  }
};
