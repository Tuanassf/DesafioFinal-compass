const UserSchema = require('../schema/UserSchema');

class AuthRepository {
	async findOne(payload){
		return await UserSchema.findOne(payload).select('+senha');
	}
}
module.exports = new AuthRepository(); 