const { request, response } = require("express");
const desaparecidosCollections = require("../models/animaisDesaparecidosSchema");

const getAllDesaparecidos = (request, response) => {
    console.log(request.url);

    desaparecidosCollections.find((error, desaparecido) => {
        if(error){
            return response.status(500).send(error);
        }else {
            return response.status(200).json({
                mensagem: "GET com sucesso.",
                desaparecido
            });
        }
    });
}

const getByNome = (request, response) => {
    const nome = request.params.nome;

    desaparecidosCollections.find({nome: nome}, (error, desaparecido) => {
        if(error){
            response.status(500).send(error);
        }else if(desaparecido == "") {
            return response.status(400).send("O animal informado não foi encontrado.");
        }else{
            return response.status(200).send({
                mensagem: "GET por nome, feito com sucesso.",
                desaparecido
            });
        }
    });
}

const addDesaparecido = (request, response) => {
    const desaparecidoBody = request.body; 
    const desaparecido = new desaparecidosCollections(desaparecidoBody); 

    desaparecido.save((error) => {
        if(error){
            return response.status(400).send(error);
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso.",
                desaparecido
            });
        }
    });
}

const updateTelefoneByNome = (request, response) => {
    const nomeParam = request.params.nome;
    const telefoneBody = request.body;
    const update = {new: true} 

    desaparecidosCollections.findOneAndUpdate(
        {nome: nomeParam}, 
        telefoneBody, 
        update,
        (error, desaparecido) => {
            if(error){
                return response.status(500).send(error)
            }else if (desaparecido){
                return response.status(200).send({
                    mensagem: "Campo atualizado com sucesso.",
                    desaparecido
                });
            }else {
                return response.status(404).send({mensagem: "Animal não encontrado."});//rever essa mensagem
            }
        }
    );
}

const updateTelefoneById = (request, response) => {
    const id = request.params.id;
    const telefoneBody = request.body;
    const update = {new:true}

    desaparecidosCollections.findOneAndUpdate(
        id, 
        telefoneBody, 
        update,
        (error,desaparecido)=>{

            if(error) {
                return response.status(500).send(error)
            } else if (desaparecido) {
                return response.status(200).send({
                    mensagem: "Campo atualizado com sucesso.",
                    desaparecido
                });
            } else {
                return response.status(404).send({mensagem: "Animal não encontrado."})
        }
    
    });
}

const deleteDesaparecidoByNome = (request, response) => {
    const nomeParam = request.params.nome;
    const deleteBody = request.body;

    desaparecidosCollections.findOneAndDelete(
        {nome: nomeParam},
        deleteBody, 
        (error, nomeAnimal) => {
            if(error){
                return response.status(500).send(error);
            }else if(nomeAnimal){
                return response.status(200).send("Animal deletado com sucesso.");
            }else{
                return response.status(404).send("O animal informado não existe");
            }
        }
    );
}

module.exports = {
    getAllDesaparecidos,
    addDesaparecido,
    getByNome,
    updateTelefoneByNome,
    updateTelefoneById,
    deleteDesaparecidoByNome
}