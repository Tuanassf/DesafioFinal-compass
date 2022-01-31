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
    async findUserById (req, res) {
        const { id } = req.params
        try {
          const result = await UserService.findOne(id)
          return res.status(200).json(result)
        } catch (error) {
          return res.status(400).json({
            'message': 'bad request',
            'details': [{ 'message': error.message }]
          })     
        }
    }
    async updateUser(req, res) {
        const id = req.params.id;
        const dataToUpdate = req.body; 
        try {
            const updatedUser = await UserService.update(id, dataToUpdate);
            res.status(200).json(updatedUser);
        } catch (error) {
          return res.status(400).json({
            'message': 'bad request',
            'details': [{ 'message': error.message }]
          })
        }
    }    
    async deleteUser(req, res) {
        const id = req.params.id;
        try {
          const user = await UserService.find({ _id: id });
    
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          await UserService.delete({ _id: id });
          return res.status(204).json();
        } catch (error) {
          return res.status(400).json({
            'message': 'Bad request',
            'details': [{ 'message': error.message }]
          });
        }
    }
  
}
module.exports = new UserController();