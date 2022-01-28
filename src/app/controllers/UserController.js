const UserService = require('../service/UserService');

class UserController  {
    async create(req, res) {
      try {
        const user = await UserService.create(req.body);
        return res.status(201).json(user);
      } catch (error) {
        return res.status(500).json({ error: 'Registration failed' })
      }
    }
}
module.exports = new UserController();