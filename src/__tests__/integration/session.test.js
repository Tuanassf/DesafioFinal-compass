const req = require('supertest');
const app = require('../../app');
const UserService = require('../../app/service/UserService');
const RentalService = require('../../app/service/RentalService');

const user = {};
const rental = {};

describe('User tests', () => {
  beforeAll(async () => {
    user.u1 = await UserService.create({
      nome: 'Tuana',
      cpf: '24263587006',
      data_nascimento: '05/04/2000',
      email: 'Tuana@email.com',
      senha: '123456',
      habilitado: 'sim'
    });
  });
  it('should be able to get all users - getAll users', async () => {
    const res = await req(app).get('/api/v1/people/');
    expect(res.status).toBe(200);
  });
  it('should be able to get a user by Id - getById user', async () => {
    const res = await req(app).get(`/api/v1/people/${user.u1._id}`);
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe('Tuana');
    expect(res.body.cpf).toBe('24263587006');
    expect(res.body.data_nascimento).toBe('05/04/2000');
    expect(res.body.email).toBe('Tuana@email.com');
    expect(res.body.habilitado).toBe('sim');
  });
  it('should be able to post new users- POST user', async () => {
    const res = await req(app).post('/api/v1/people/').send({
      nome: 'Tatiana',
      cpf: '49135229063',
      data_nascimento: '04/04/1990',
      email: 'tatiana@email.com',
      senha: '123456',
      habilitado: 'sim'
    });
    expect(res.status).toBe(201);
    expect(res.body.nome).toBe('Tatiana');
    expect(res.body.cpf).toBe('49135229063');
    expect(res.body.data_nascimento).toBe('04/04/1990');
    expect(res.body.email).toBe('tatiana@email.com');
    expect(res.body.habilitado).toBe('sim');
  });
  it('should be able to update a user - PUT user', async () => {
    const res = await req(app).put(`/api/v1/people/${user.u1._id}`).send({
      nome: 'Maria',
      cpf: '24263587006',
      data_nascimento: '05/04/2000',
      email: 'maria@email.com',
      senha: '123456',
      habilitado: 'sim'
    });
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe('Maria');
    expect(res.body.cpf).toBe('24263587006');
    expect(res.body.data_nascimento).toBe('05/04/2000');
    expect(res.body.email).toBe('maria@email.com');
    expect(res.body.habilitado).toBe('sim');
  });
  it('should be able to delete a user - Delete user', async () => {
    const res = await req(app).delete(`/api/v1/people/${user.u1._id}`);
    expect(res.status).toBe(204);
  });
});

describe('Rental tests', () => {
  beforeAll(async () => {
    rental.r1 = await RentalService.create({
      nome: 'Ford',
      cnpj: '79707280000122',
      atividades: 'Alugar Automóveis',
      endereco: [
        {
          cep: '77827690',
          number: '10',
          isFilial: false
        }
      ]
    });
  });
  it('should be able to det all rentals - getAll rental', async () => {
    const res = await req(app).get('/api/v1/rental/');
    expect(res.status).toBe(200);
  });
  it('should be able to get one rental by id parameter - getById rental', async () => {
    const res = await req(app).get(`/api/v1/rental/${rental.r1._id}`);
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe('Ford');
    expect(res.body.cnpj).toBe('79707280000122');
    expect(res.body.atividades).toBe('Alugar Automóveis');
  });
  it('should be able to post rentals - POST rental', async () => {
    const res = await req(app)
      .post('/api/v1/rental/')
      .send({
        nome: 'Fiat',
        cnpj: '16547537000106',
        atividades: 'Alugar Automóveis',
        endereco: [
          {
            cep: '13106032',
            number: '10',
            isFilial: false
          }
        ]
      });
    expect(res.status).toBe(201);
    expect(res.body.nome).toBe('Fiat');
    expect(res.body.cnpj).toBe('16547537000106');
    expect(res.body.atividades).toBe('Alugar Automóveis');
  });
  it('should be able to update a rental - PUT rental', async () => {
    const res = await req(app)
      .put(`/api/v1/rental/${rental.r1._id}`)
      .send({
        nome: 'Renault',
        cnpj: '79707280000122',
        atividades: 'Alugar Automóveis',
        endereco: [
          {
            cep: '77827690',
            number: '10',
            isFilial: false
          }
        ]
      });
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe('Renault');
    expect(res.body.cnpj).toBe('79707280000122');
    expect(res.body.atividades).toBe('Alugar Automóveis');
  });
  it('should be able to delete a rental- DELETE rental', async () => {
    const res = await req(app).delete(`/api/v1/rental/${rental.r1._id}`);
    expect(res.status).toBe(204);
  });
});
