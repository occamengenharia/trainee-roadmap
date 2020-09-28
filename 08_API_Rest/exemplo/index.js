const express = require('express');

const app = express();

app.use(express.json());

const users = [];

app.get('/users', (request, response) => {
  return response.json(users);
});

app.post('/users', (request, response) => {

  const user = request.body;
  if(user.name === 'joao') {
    return response.status(401).json({erro: 'esse usuário não pode'});
  }
  
  users.push(user);
  return response.status(201).send();
});

app.put('/users/:id', (request, response) => {
  const { id } = request.params;

  const user = users.find(user  => user.id == id);

  console.log(id);
  
  return response.send('qualquer coisa');
});

app.delete('/users', (request, response) => {
  return response.send('qualquer coisa');
});


app.listen(3000);