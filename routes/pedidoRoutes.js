const router = require('express').Router()
const Pedido = require('../models/Pedido.js');

// Leitura de todos os pedidos.
router.get('/', async (req, res) => {
  try {
    
    const pedidos = await Pedido.find()

    // Este sort serve para retornar os pedidos na ordem do mais recente para o mais antigo
    res.status(200).json(pedidos.sort((a,b) => {
      return parseInt(a.id) - parseInt(b.id)
    }))

  } catch (error) {
    res.status(500).json({error: error})
  }
})

// Leitura de um pedido específico.
router.get('/:id', async (req,res) => {

  const id = req.params.id
  
  try {
    
    const pedido = await Pedido.findOne({id: id})
    
    if(!pedido) {
      res.status(422).json({message: 'Pedido não encontrado.'})
      return
    }

    res.status(200).json(pedido)

  } catch (error) {
    res.status(500).json({error: error})
  }
})

module.exports = router