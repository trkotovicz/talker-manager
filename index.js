const express = require('express');
const bodyParser = require('body-parser');

const { readFile } = require('./helpers/readWriteFile');
const findById = require('./middlewares/findById');
// const { validate } = require('../middlewares/validation');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
const PATH = './talker.json';

app.get('/talker', async (_req, res) => {
  const talker = await readFile(PATH) || [];

  res.status(HTTP_OK_STATUS).json(talker);
});

app.get('/talker/:id', findById);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
