![deliciasDaMaria](https://user-images.githubusercontent.com/63256085/150689737-60513bc0-8df8-46c1-b89d-69b0cbab21c9.png)



## Descrição do Projeto
Dona Maria abriu uma Lojinha para venda de doces caseiros. Para a melhor administração de sua empresinha, resolveu pedir ajuda para organizar seus funcionários e produtos. Nesse cenário, construimos uma API com duas entidades - funcionarios e produtos - para ajudar Maria em suas atividades.  

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/)
- [MongoDB](https://www.mongodb.com/)
- [Swagger](https://swagger.io/)

### Pré-requisitos
É importante a instalação das tecnologias utilizadas descritas acima. Além disso, é preciso um editor para trabalhar com o código. Utilizamos o [VSCode](https://code.visualstudio.com/)

#### Passos
Antes de testar as rotas, é importante seguir alguns passos:

```bash
# Clone este repositório
$ git clone https://github.com/MathLopes1/compass-grupo02.git

# Acesse a pasta do projeto no terminal/cmd
$ cd desafiofinal-compass

# Instale as dependências
$ npm install

# Instale as dev dependências
$ npm install --save-dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Execute a aplicação em modo de produção
$ npm run start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
:file_folder: Bibliotecas utizadas:
<table>
  <tr>
    <td>Mongoose</td>
    <td>Express</td>
    <td>Joi</td>
    <td>Nodemon</td>    
  </tr>
</table>

### Features

- [x] Criar um endpoint para cadastrar um carro
- [x] Criar um endpoint para listar todos os carros cadastrados
- [x] Criar um endpoint para remover um carro cadastrado
- [x] Criar um endpoint para atualizar algum carro cadastrado
- [ ] Criar um endpoint para buscar por id um carro cadastrado
- [ ] Criar um endpoint para cadastrar uma pessoa
- [ ] Autenticação com o usuário
- [ ] Criar um endpoint para atualizar alguma pessoa cadastrada
- [ ] Criar um endpoint para remover uma pessoa cadastrada
- [ ] Criar um endpoint para buscar por id uma pessoa cadastrada
- [ ] Criar um endpoint para listar todos as pessoas cadastradas
- [x] Validações
 
 ## Testar as Rotas

POST - Cadastrar veículo - http://localhost:3000/api/v1/car
 ```bash
{
    "name": "maria da silva",
    "cpf": "12312312312",
    "office": "gerente",
    "birthday": "21/04/2021"
}
 ```
GET - Listar funcionários - http://localhost:3000/api/v1/employee
```bash
{
"employees": [
                {
                    "employee_id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621",
                    "name": "maria da silva",
                    "cpf": "123.123.123-12",
                    "office": "gerente",
                    "birthday": "21/04/2021",
                    "situation": "active"
                }, {
                    "employee_id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43622",
                    "name": "joão da silva",
                    "cpf": "123.123.123-13",
                    "office": "gerente",
                    "birthday": "21/04/2021",
                    "situation": "deactivate"
                }
            ]
}


```
GET - Listar por query params - http://localhost:3000/api/v1/employee/?name=fulano
 ```bash
 {
    {
        "name": "silva",
        "office": "gerente"
    }
}
 ```
PUT - Atualizar funcionários - http://localhost:3000/api/v1/employee/:employee_id
```bash
{
    "name": "maria da roberta",
    "office": "funcionario",
    "situation": "deactivate"
}
```
DELETE - Deletar funcionários - http://localhost:3000/api/v1/employee/:employee_id

POST - Cadastrar um produto - http://localhost:3000/api/v1/product
```bash
{
    "name": "notebook dell",
    "category": "eletronico",
    "price": "12.32",
    "employee_id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621"
}
```
GET - Listar produtos - http://localhost:3000/api/v1/product
```bash
{
    "employee_id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621",
    "category": "eletronico",
    "name": "dell",
    "min_price": 10.5,
    "max_price":50
}
```
GET - Listar produtos por query params - http://localhost:3000/api/v1/product/?name=dell
```bash
 {
   {
        "name": "dell",
        "min_price": "00",
        "max_price": "10"
   }
}
```
