/* eslint-disable class-methods-use-this */
const UserService = require('../service/UserService');

class UserController {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      user.senha = undefined;
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  async getAllUsers(req, res) {
    try {
      const allusers = await UserService.find();
      return res.status(200).json({ usuários: allusers });
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  async findUserById(req, res) {
    const { id } = req.params;
    try {
      const result = await UserService.findOne(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const dataToUpdate = req.body;
    try {
      const updatedUser = await UserService.update(id, dataToUpdate);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      await UserService.delete({ _id: id });
      return res.status(204).end();
    } catch (error) {
      return res.status(400).json({
        message: error.message
      });
    }
  }
}

module.exports = new UserController();
