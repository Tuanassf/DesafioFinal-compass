const bcrypt = require('bcrypt')
const authService = require('../service/AuthService');
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth.json')


class UserAuthenticate  {
async authenticateUser(req, res) {
    const {email, senha} =req.body    
  try {
    const user = await authService.findOne({email})
    
    if(!user)
    return res.status(400).json({error: 'User not found'});

    if(!await bcrypt.compare(senha, user.senha))
    return res.status(400).json({error: 'Invalid password'});

    user.senha = undefined

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn:86400,
    });

    res.send({user, token})

  } catch (error) {
    return res.status(500).json({
        'message': error.message     
      })     
  }
 }
}

module.exports = new UserAuthenticate();