const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contatosSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        require: true
    },

    nome:{
        type: String,
        required: true,
    },

    celular:{
        type: String,
        required: true
    },

    dataNascimento:{
        type: Date,
        required: true,
    },

    fotoPerfil: {
        type: String,
        required: false
    },
    

})

const contatoCollections = mongoose.model('contatos', contatosSchema); 

module.exports = contatoCollections
/*
{
    collection: "contatos",
    versionKey: false //apenas para versionar, não é obrigatório
}
*/