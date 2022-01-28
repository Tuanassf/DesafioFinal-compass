<h1 align="center">API da CompassoLiza</h1>

## Descrição do Projeto
<p align="center">🚀 Uma API de aluguel de carros</p> 

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/)
- [MongoDB](https://www.mongodb.com/)
- [Swagger](https://swagger.io/)

### Pré-requisitos
É importante a instalação das tecnologias utilizadas descritas acima. Além disso, é preciso um editor para trabalhar com o código. Utilizamos o [VSCode](https://code.visualstudio.com/)


### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/Tuanassf/DesafioFinal-compass.git

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
    "modelo": "Kombi",
    "cor": "branco",
    "ano": "2019",
    "acessorios": [
    { "descricao": "ABS" }
    ],
    "quantidadePassageiros": 5
}

 ```
GET - Listar veículos - http://localhost:3000/api/v1/car
```bash
{
"veículos": [
                {
            "_id": "61f17c0e654a60fe5b642003",
            "modelo": "fusca",
            "cor": "azul",
            "ano": 1990,
            "acessorios": [],
            "quantidadePassageiros": 6,
            "__v": 0
        },{
            "_id": "61f19d57dedd423405a2c78b",
            "modelo": "Kombi",
            "cor": "azul",
            "ano": 1990,
            "acessorios": [],
            "quantidadePassageiros": 6,
            "__v": 0
        }


```
GET - Listar por query params - http://localhost:3000/api/v1/car/?modelo="GM S10 2.8"
 ```bash
 {
    {
        "modelo": "Kombi",
        "cor": "branca"
    }
}
 ```
PUT - Atualizar veículos - http://localhost:3000/api/v1/car/:id
```bash
{
            "modelo": "Kombi",
            "cor": "azul",
            "ano": 1990,
            "acessorios": [],
            "quantidadePassageiros": 6,
            "__v": 0
        }
```
DELETE - Deletar veículos - http://localhost:3000/api/v1/car/:id

```
