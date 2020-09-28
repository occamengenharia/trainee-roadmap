const express = require('express');
const path = require('path');

const api = require('./services/api');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const username = 'gabriel'

app.get("/", async (req, res) => {
  const { data } = await api.get('report/v1/brazil');
  const { data: infos } = data;

  const { confirmed, deaths } = infos;

  res.render("index", {
    confirmed,
    deaths
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    user: username
  });
});

app.listen(3000);