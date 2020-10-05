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

  //recuperar dados da sigla dos estados pela api do IBGE
  const estados = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  const { data: infoEstados } = estados;
  const siglas = [];
  infoEstados.forEach(estado => { siglas.push(estado.sigla) });

  return response.render('index', {
    country,
    confirmed,
    deaths,
    siglas
  });
});

app.get('/country/brazil/states', async (request, response) => {
  const { estado } = request.query;

  const { data } = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${estado}`);

  const { cases, deaths, uf } = data;

  return response.render('state', {
    cases,
    deaths,
    uf
  });
});


app.listen(3333);
