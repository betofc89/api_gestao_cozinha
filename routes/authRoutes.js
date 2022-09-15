const router = require('express').Router()
const jwt = require('jsonwebtoken')

// Leitura de todas as receitas.
router.post('/login', async (req, res) => {
  try {
    if(req.body.userName === 'admin' && req.body.password === 'admin') {
      const token = await jwt.sign({ 
        userName: 'admin',
      }, process.env.PRIVATE_KEY);
    
      return res.status(200).json({token})
    }
    return res.status(403).json({msg: 'Usuário ou senha inválidos'})

  } catch (error) {
    return res.status(500).json({error})
  }
})

module.exports = router