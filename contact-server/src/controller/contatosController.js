//Chama as funções que serão criadas nas ROTAS

const contatoCollections = require('../models/contatosSchema')

const getAllContatos = (req, res) => {
    console.log(req.url);

    contatoCollections.find((error, contatos) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).json({
                mensagem: "Tudo certo",
                version: "1.0"
            })
        }
    })
}

//@description: POST add
const addContato = (req, res) => {
    const contatoBody = req.body //usar o body que user digitou

    const contato = new contatoCollections(contatoBody)

    contato.save((error) => {
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.status(200).send({
                message: 'Post Success',
                contato
            })
        }

    })
}

//@description Get contatos/nome
const getContatoNome = (req, res) => {
    const nome = req.params.nome

    contatoCollections.find({
        nome: nome
    }, (error, contatos) => { //busca pelo nome
        if (error) {
            return res.status(500).send(error)
        } else if (contatos == "") {
            return res.status(400).send({
                messagem: "Get não encontrado!",
                
            })
        } else {
            return res.status(200).send({
                messagem: "GET por NOME com Sucesso!",
                contatos
            });
        }
    })

}

//@description GET contatos/id
//@host: http://localhost:3030/contatos/id/5fa6db437cb96b3858e47cfb
const getContatoById = (req, res) => {
    const id = req.params.id

    contatoCollections.findById(id, (error, contatos) => {
        if (error) {
            return res.status(500).send(error);
        } else if (contatos) {
            return res.status(200).send({
                messgae: "ok",
                contatos
            })
        } else {
            return res.status(404).send('Contact not found')
        }

    })
}

//@description PATCH 
//UPDATE
// /contatos/atualizar/[ID]" Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)
const patchContatos = (req, res) => {
    const idParam = req.params.id
    const contatosBody = req.body
    const novo = {new: true} //retorna valor modificado

    contatoCollections.findByIdAndUpdate(
        idParam,
        {$set: contatosBody}, //com os colchetes não funciona
        novo,
        (error, contatos) => {
            if (error){
                return res.status(500).send(error)
            }else if(contatos){
                return res.status(200).send(contatos)
            }else{
                return res.sendStatus(404)
            }
        }             

    )
}
//Atualiza somente telefone do contato por id específico e retorna mensagem amigável:
//@description: PUT /contatos/atualizar/telefone[ID]
const phoneUpdate = (req, res) => {
    const id = req.params.id
    const celular = req.params.celular
    //const contatosBody = req.body
    //const novo = {new: true} 

    contatoCollections.findByIdAndUpdate(id, celular,(error, contatos) => {         
            if (error) {
               return res.status(500).send(error) 
            }else if (contatos){
                return res.status(200).send({
                    message: 'Telefone alterado!' //telefone vêm null - VERIFICAR
                })
            }else{
                return res.status(404).send({
                    message: 'Error... Verificar telefone', 
                    contatos
                })
            }
    })
}

// /contatos/deletar/[ID]" Deleta contato por id específico e retorna mensagem amigável:

module.exports = {
    getAllContatos,
    addContato,
    getContatoNome,
    getContatoById,
    patchContatos,
    phoneUpdate
}