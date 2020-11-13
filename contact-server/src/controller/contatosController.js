//Chamando as funções que serão criadas nas ROTAS
const contatoCollections = require('../models/contatosSchema')

const getAllContacts = (req, res) => {
    console.log(req.url);

    contatoCollections.find((error, contacts) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(contacts)
        }
    })
}


const addContato = (req, res) => {
    const contactsBody = req.body //o que user digitou 
    const contato = new contatoCollections(contactsBody)

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

//Search Name
const getContactName = (req, res) => {
    const nome = req.params.nome

    contatoCollections.find({
        nome: nome
    }, (error, contatos) => { //busca pelo nome
        if (error) {
            return res.status(500).send(error)
        } else if (contatos == "") {
            return res.status(400).send({
                messagem: "Name not found!",                
            })
        } else {
            return res.status(200).send({
                messagem: "Nome encontrado com Sucesso!",
                contatos
            });
        }
    })

}

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

//Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)
const upContatos = (req, res) => {
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
const phoneUpdate = (req, res) => {
    const id = req.params.id    
    const contatosBody = req.body
    const novo = {new: true} 

    contatoCollections.findByIdAndUpdate(id,contatosBody,novo,(error, contatos) => {         
            if (error) {
               return res.status(500).send(error) 
            }else if (contatos){
                return res.status(200).send({
                    message: 'TelePhone Update!',
                    contatos 
                })
            }else{
                return res.status(404).send({
                    message: 'Error... Verificar TelePhone.' 
                    
                })
            }
    })
}

//Deleta contato por id específico e retorna mensagem amigável:
const deleteContatos = (req, res) => {
    const id = req.params.id
    contatoCollections.findByIdAndDelete(id,(error, contatos) =>{
        if (error) {
            return res.status(500).send({
                message: 'Ocorreu algum Error, verificar!',
                error
            })
        }else{
            if (contatos) {
                return res.status(200).send("Contact Deleted!!")
            }else{
                return res.status(404)
            }
        }
    })
}
module.exports = {
    getAllContacts,
    addContato,
    getContactName,
    getContatoById,
    upContatos,
    phoneUpdate,
    deleteContatos
}