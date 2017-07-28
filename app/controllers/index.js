var router = require('express').Router()

router.get('/', function (req, res) {
  res.json({ message: 'YEAH! Seja Bem-Vindo a nossa API' })
})

/**
 * rotas aq
 */

module.exports = router
