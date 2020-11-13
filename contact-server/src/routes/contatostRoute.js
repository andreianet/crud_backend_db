const express = require('express')
const router = express.Router()
const controller = require('../controller/contatosController')

//@Description: Get 
router.get('/', controller.getAllContacts)

//@Description: Post - Criar novos contacts
router.post('/criar', controller.addContato)

//@Description: Get - Search name
router.get('/:nome', controller.getContactName)

//@Description: Get - Buscar pelo ID
//@param: id
router.get('/id/:id', controller.getContatoById)

//@Description: Put - Update pelo ID 
//@param: id
router.put('/atualizar/:id', controller.upContatos)

//@Description: Put - Update por completo 
//@param: id
router.put('/atualizar/telefone/:id', controller.phoneUpdate)

//@description: Delete - Deletar contato por ID
//@param: id
router.delete('/deletar/:id', controller.deleteContatos)

module.exports = router