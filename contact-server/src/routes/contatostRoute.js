const express = require('express')
const router = express.Router()
const controller = require('../controller/contatosController')

router.get('/', controller.getAllContatos)
router.post('/criar', controller.addContato)
router.get('/:nome', controller.getContatoNome)
router.get('/id/:id', controller.getContatoById)

router.patch('/atualizar/:id', controller.patchContatos)

router.put('/atualizar/:id', controller.phoneUpdate)

module.exports = router