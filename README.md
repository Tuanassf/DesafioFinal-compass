 
 <img src="https://user-images.githubusercontent.com/83101467/152079777-a64db24e-5a1d-45f5-a5cb-f530c12315e0.jpg"  width="10000" height="450">


## Descrição do Projeto
<p align="left">🚀 Uma API de locação de carros que atua no seguimento de aluguel de carro de luxo e semi luxo. Com carros exclusivos disponibilizados em apenas um modelo por cidade.</p> 

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/)
- [MongoDB](https://www.mongodb.com/)
- [Swagger](https://swagger.io/)

### Pré-requisitos
É importante a instalação das tecnologias utilizadas descritas acima. Além disso, é preciso um editor para trabalhar com o código. Utilizamos o [VSCode](https://code.visualstudio.com/)


### 🎲 Configurar variáveis de ambiente

```bash
Será necessário criar na raiz do projeto um arquivo .env configurar as variáveis:

# Porta que o servidor irá rodar.
PORT=3000

# Endereço para conectar com o Mongo.
# Exemplo:
DB_HOST=mongodb://localhost:27017/<name>
```

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
- [x] Criar um endpoint para buscar por id um carro cadastrado
- [x] Criar um endpoint para cadastrar uma pessoa
- [x] Autenticação com o usuário
- [x] Criar um endpoint para atualizar alguma pessoa cadastrada
- [x] Criar um endpoint para remover uma pessoa cadastrada
- [x] Criar um endpoint para buscar por id uma pessoa cadastrada
- [x] Criar um endpoint para listar todas as pessoas cadastradas
- [x] Validações
 
## Documentação

```bash
Para ter acesso a documentação, e também poder testar a API siga os passos:

# Inicie a aplicação no vsCode
$ npm run start

# Em seguida abra seu browser pesquise para ter acesso a documentação da API
http://localhost:3000/api/v1/api-docs

```
## Deploy
Na fase de Deploy utilizou-se a ferramenta Heroku, para fazer a hospedagem da nossa API.

para ter acesso a Documentação da compass-lisa na Web.
Acesse:https://compasslisa2.herokuapp.com/api/v1/api-docs/

