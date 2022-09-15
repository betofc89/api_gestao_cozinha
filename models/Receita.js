const mongoose = require('mongoose');

const Receita = mongoose.model('Receita', {
  id: Number,
  nome: String,
  descricao: String,
  foto: String,
  ingredientes: Array,
  tempoPreparo: String,
  modoPreparo: Array
});

module.exports = Receita