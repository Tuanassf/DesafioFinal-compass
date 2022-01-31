const UserService = require('../service/UserService');

class UserController  {
    async create(req, res) {
        /*const {cpf} = req.body*/

      try {
          /*if(await UserService.findOne({ cpf }))
          return res.status(400).send({ error: 'User already exists with this cpf'})*/

        const user = await UserService.create(req.body);

        user.senha = undefined

        return res.status(201).json(user);
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
    }
    async getAllUsers(req, res) {
        try {
          const allusers = await UserService.find()
          return res.status(200).json({'usuários':allusers})
        } catch (error) {
            return res.status(500).json(error.message)
        }
      }
  
}
module.exports = new UserController();