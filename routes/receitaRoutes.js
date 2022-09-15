const router = require('express').Router()
const Receita = require('../models/Receita.js');

// Leitura de todas as receitas.
router.get('/', async (req, res) => {
  try {
    
    const receitas = await Receita.find()

    res.status(200).json(receitas)

  } catch (error) {
    res.status(500).json({error})
  }
})

// Leitura de uma receita específica.
router.get('/:id', async (req,res) => {

  const id = req.params.id

  try {
    
    const receita = await Receita.findOne({ id })
    
    if(!receita) {
      res.status(422).json({message: 'Receita não encontrada.'})
      return
    }

    res.status(200).json(receita)

  } catch (error) {
    res.status(500).json({error})
  }

})

module.exports = router