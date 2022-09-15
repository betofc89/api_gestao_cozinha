// config inicial
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const receitaRoutes = require('./routes/receitaRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors({origin:'*',"methods":"GET,HEAD,PUT,PATCH,POST,DELETE"}));

app.use(express.json());


// rotas da API
app.use('/receitas', receitaRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/auth', authRoutes);


// rota inicial / endpoint
app.get('/', (req, res) => {
  res.json({ message: 'testando...'})
})

// Conectar à base de dados e entregar uma porta (3000).
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_USER}.eefzipo.mongodb.net/dbgestaocozinha?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Conectado à base dbgestaocozinha.");
    app.listen(3000);
  })
  .catch((err) => console.log(err))