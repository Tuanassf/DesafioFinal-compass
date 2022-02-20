/* eslint-disable class-methods-use-this */
const axios = require('axios');

class GetCep {
  async getCep(cep) {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    return result.data;
  }
}
module.exports = new GetCep();
