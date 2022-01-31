const Joi = require('joi');

module.exports = async (req, res, next) => {

try {
    const schema = Joi.object({
        nome: Joi.string()
        .required(),      

    cpf: Joi.string()
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
    }
        .required(),

    data_nascimento: Joi.date()
        .format('DD/MM/YYYY')
        .max('now')
        .required(),

        email: Joi.string()
        .email()
        .required()
        .unique(),
    
        senha: Joi.string()
        .min(6)
        .required(),

      habilitado: Joi.string()
        .required()
      })

     const { error } = await schema.validate(req.body, { abortEarl: true })

    if (error) throw {
        message: 'Bad Request',
        details: error.details
      };
    return next()
    
} catch (error) {
    return res.status(400).json(error)
}
}