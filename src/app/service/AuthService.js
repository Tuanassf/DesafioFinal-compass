const AuthRepository = require('../repository/AuthRepository');

class AuthService{  
	async findOne(payload){
		return await AuthRepository.findOne(payload);
	}
}

module.exports = new AuthService();