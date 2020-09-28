const express = require('express');
const path = require('path');
const axios = require('axios');
 
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/country/:pais', async (request, response) => {

  const { pais } = request.params;
  const { data } = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/${pais}`);
  
  const { data: info } = data;

  const { confirmed, deaths, country } = info;

  return response.render('index', {
    country,
    confirmed,
    deaths
  });
});

app.get('/state', async (request, response) => {
  const { data } = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp`);

  
  const { cases, deaths, uf } = data;

  return response.render('state', {
    cases,
    deaths,
    uf
  });
});


app.listen(3333);
