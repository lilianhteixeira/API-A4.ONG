const { request, response } = require("express");
const doadoresCollections = require("../models/doadoresSchema");

const getAllDoadores = (request, response) => {
    console.log(request.url);

    doadoresCollections.find((error, doadores) => {
        if(error){
            return response.status(500).send(error);
        }else {
            return response.status(200).json({
                mensagem: "GET com sucesso.",
                doadores
            });
        }
    });
}

const getByNome = (request, response) => {
    const nome = request.params.nome;

    doadoresCollections.find({nome: nome}, (error, doadores) => {
        if(error){
            response.status(500).send(error);
        }else if(doadores == "") {
            return response.status(400).send("O doador informado não foi encontrado.");
        }else{
            return response.status(200).send({
                mensagem: "GET por nome, feito com sucesso.",
                doadores
            });
        }
    });
}

const addDoador = (request, response) => {
    const doadorBody = request.body; 
    const doadores = new doadoresCollections(doadorBody); 

    doadores.save((error) => {
        if(error){
            return response.status(400).send(error);
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso.",
                doadores
            });
        }
    });
}

const updateByNome = (request, response) => {
    const nomeParam = request.params.nome;
    const doadorBody = request.body;
    const update = {new: true} 

    doadoresCollections.findOneAndUpdate(
        {nome: nomeParam}, 
        doadorBody, 
        update,
        (error, doadores) => {
            if(error){
                return response.status(500).send(error)
            }else if (doadores){
                return response.status(200).send({
                    mensagem: "Campo atualizado com sucesso.",
                    doadores
                });
            }else {
                return response.status(404).send({mensagem: "Doador não encontrado."})
            }
        }
    );
}

const updateById = (request, response) => {
    const id = request.params.id;
    const doadorBody = request.body;
    const update = {new:true}

    doadoresCollections.findOneAndUpdate(
        id, 
        doadorBody, 
        update,
        (error,doadores)=>{

            if(error) {
                return response.status(500).send(error)
            } else if (doadores) {
                return response.status(200).send({
                    mensagem: "Campo atualizado com sucesso.",
                    doadores
                });
            } else {
                return response.status(404).send({mensagem: "Doador não encontrado."})
        }
    
    });
}

const deleteDoadorByNome = (request, response) => {
    const nomeParam = request.params.nome;
    const deleteBody = request.body;

    doadoresCollections.findOneAndDelete(
        {nome: nomeParam},
        deleteBody, 
        (error, nomeDoador) => {
            if(error){
                return response.status(500).send(error);
            }else if(nomeDoador){
                return response.status(200).send("Doador deletado com sucesso.");
            }else{
                return response.status(404).send("O doador informado não existe.");
            }
        }
    );
}

module.exports = {
    getAllDoadores,
    addDoador,
    getByNome,
    updateByNome,
    updateById,
    deleteDoadorByNome
}