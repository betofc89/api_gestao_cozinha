const mongoose = require('mongoose');

const Pedido = mongoose.model('Pedido', {
  id: Number,
  ref_receita_id: Number,
  ref_receita: Array,
  hora: String,
  status: String
});

module.exports = Pedido