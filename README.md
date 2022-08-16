# Talker Manager

Nesse projeto, foi desenvolvido uma API REST.</br>
Trata-se de um sistema para cadastros de palestrantes, onde é possível cadastrar, visualizar, pesquisar, editar e excluir informações.</br>


## Utilização
1. Clone o repositório `git@github.com:trkotovicz/talker-manager.git`
2. Instale as dependências com `npm install`
3. Inicie o projeto com `npm run dev`
4. Acesse localmente na porta 3000 (`http://localhost:3000/`).

## Rotas

### GET `/talker`

A requisição retorna um array com todas as pessoas palestrantes cadastradas. </br>
Caso não exista nenhuma pessoa palestrante cadastrada a requisição retorna um array vazio.

`http://localhost:3000/talker`

### GET `/talker/:id`

A requisição retorna uma pessoa palestrante com base no <code>id</code> da rota. </br>
Por exemplo, ao fazer uma requisição <code>/talker/1</code>, a resposta deve ser:<br />
  ```json
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
  ```
`http://localhost:3000/talker/:id`

### GET `/talker/search`

O endpoint retorna um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL.</br>
Para fazer uma busca pelo nome, inserir no campo `query` o parâmetro da busca.
Caso searchTerm não seja informado ou esteja vazio, o endpoint retorna um array com todos as pessoas palestrantes cadastradas.
Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint retorna um array vazio.

`http://localhost:3000/talker/search`

### POST `/login`

O endpoint recebe no corpo da requisição os campos `email` e `password` e retorna um token aleatório de 16 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.
A rota faz a validação do  `email` e da `senha`.

`http://localhost:3000/login`

### POST `/talker`

O endpoint adiciona uma nova pessoa palestrante. </br>
A requisição valida o login através do token gerado. Para isso, adicione o token de autenticação nos headers, no campo `authorization`.</br>

O corpo da requisição deverá ter o seguinte formato:
  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```
`http://localhost:3000/talker`

### PUT `/talker/:id`

O endpoint edita uma pessoa palestrante com base no id da rota, sem alterar o id registrado. </br>
A requisição valida o login através do token gerado. Para isso, adicione o token de autenticação nos headers, no campo `authorization`.</br>

O corpo da requisição deverá ter o seguinte formato:
    ```json
    {
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
      }
    }
    ```
`http://localhost:3000/login/:id`

### DELETE `/talker/:id`

O endpoint deleta uma pessoa palestrante com base no id da rota. Devendo retornar o `status 204`, sem conteúdo na resposta. </br>
A requisição valida o login através do token gerado. Para isso, adicione o token de autenticação nos headers, no campo `authorization`. </br>

`http://localhost:3000/login/:id`
