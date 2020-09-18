# API Rest

## Como funciona ?

- Fluxo de requisições e respostas:
    - Requisição feita por um cliente;
    - Resposta retornado através de uma estrutura de dados (JSON, XML);
    - cliente recebe a resposta e processa os dados;
- As rotas utilizam métodos HTTP:
    - GET: http://minhaapi.com/users
    - POST: http://minhaapi.com/users
    - DELETE: http://minhaapi.com/users/1
    - PUT: http://minhaapi.com/users/1

    Método HTTP

    Recurso / Rota

    Parâmetro

## Benefícios:

- Multiplos clientes (frontend, ou até mesmo backend);
- Protocolo de comunicação padronizado:
    - Mesma estrutura para web, mobile, API pública;
    - Comunicação com serviços externos;
- JSON (Javascript object notation)

    ```json
    {
        "id": 4,
        "name_activity": "aula nodejs",
        "User": {
          "id": 9,
          "name": "Gabriel Prando",
          "phone": "469999039412\r\n",
          "email": "gprando55@gmail.com"
        }
      },

    ```

    - Qualquer outro cliente conseguirá consumir esses dados;

## Conteúdo da requisição:

GET http://minhaapi.com/company/1/users?page=2

Route, Route Params, Query Params, 

Body: (Só em requisições do tipo PUT e POST), não ficará visivel na url;

Headers: informações adicionais que não tem haver com o conteudo da requisição, por exemplo token de auth e local/região;

 

## HTTP Code:

- 1xx: Informativo (quase nunca iremos utilizar);
- 2xx: Sucesso;
    - 200: sucesso na req;
    - 201: criado;
- 3xx: Redirecionamento
    - 301: A url mudou permanentemente;
    - 302: mudou mas pode voltar a ser a mesma;
- 4xx: erro
    - 400: req mal sucessida (geralmente quando falta algum dado na requisição);
    - 401: não autorizada;
    - 404: não encontrado;
- 5xx: erro no server
    - 500: erro interno no servidor

## Métodos HTTP:

- GET: Buscar informações do backend;
- POST: Criar uma informação no back-end;
- PUT/PATCH: Alterar uma informação no back-end (PATCH quando for alterar uma única informação);
- DELETE: deletar uma informação no backend;

### Tipos de parâmetros:

- Query Params: Filtros e paginação (para começar colocamos um "?" na url, depois um nome do parâmetro e o valor, e & para colocar mais parâmetros, ex: http:localhost:3333/users?=name=gabriel&idade=20)
- Route Params: Identificar recursos (Atualizar/Deletar);
- Request Body: Conteúdo enviado na hora de criar ou atualizar um elemento;

## Middlewares

- Interceptador de requisições que interrompe totalmente a requisição ou altera dados da requisição;