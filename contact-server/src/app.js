const express = require('express');
const app = express();
const cors = require('cors');

//conectar o banco
const database = require('./models/repository')
database.connect()

app.use(cors());
app.use(express.json());

const index = require('./routes/index')
const contatos = require('./routes/contatostRoute')

app.use("/", index);
app.use("/contatos", contatos);

module.exports = app