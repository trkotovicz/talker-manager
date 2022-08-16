# Boas-vindas ao repositório do projeto Talker Manager!

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Você irá construir uma aplicação de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso você deverá:
  1. Desenvolver uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers) e;
  2. Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`.

</details>

# Requisitos

---

## 1 - Crie o endpoint GET `/talker`

<details>
  <summary>A requisição deve retornar o <code>status 200</code> e um array com todas as pessoas palestrantes cadastradas. Exemplo: </summary><br />

```json
[
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Ricardo Xavier Filho",
    "age": 33,
    "id": 3,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Marcos Costa",
    "age": 24,
    "id": 4,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
]
```
  
</details>
 Caso não exista nenhuma pessoa palestrante cadastrada a requisição deve retornar o <code>status 200</code> e um array vazio.<br />

## 2 - Crie o endpoint GET `/talker/:id`

A requisição deve retornar o <code>status 200</code> e uma pessoa palestrante com base no <code>id</code> da rota. Por exemplo, ao fazer uma requisição <code>/talker/1</code>, a resposta deve ser:<br />
  ```json
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
  ```

## 3 - Crie o endpoint POST `/login`

O endpoint deverá receber no corpo da requisição os campos `email` e `password` e retornar um token aleatório de 16 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.

## 4 - Adicione as validações para o endpoint `/login`

Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de `status 400` com a respectiva mensagem de erro ao invés do token.
As regras de validação são:<br />
  - o campo `email` é obrigatório;
  - o campo `email` deve ter um email válido;
  - o campo `password` é obrigatório;
  - o campo `password` deve ter pelo menos 6 caracteres.

## 5 - Crie o endpoint POST `/talker`

- O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo;
- O corpo da requisição deverá ter o seguinte formato:
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
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

## 6 - Crie o endpoint PUT `/talker/:id`
  - O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.
  - O corpo da requisição deverá ter o seguinte formato:
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
  - A requisição deve ter o token de autenticação nos headers, no campo `authorization`.        
  - Caso esteja tudo certo, retorne o `status 200` e a pessoa editada.
  - O endpoint deve retornar o `status 200` e a pessoa palestrante que foi editada.

## 7 - Crie o endpoint DELETE `/talker/:id`

  - A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
  - Caso o token não seja encontrado retorne um código de `status 401`.
  - O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 204`, sem conteúdo na resposta.
  
## 8 - Crie o endpoint GET `/talker/search?q=searchTerm`

  - O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL.
  - A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
  - Caso o token não seja encontrado retorne um código de `status 401`.
  - Caso `searchTerm` não seja informado ou esteja vazio, o endpoint deverá retornar um array com todos as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um `status 200`.
  - Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.
