const { request, response } = require("express");
const animaisCollections = require("../models/animaisSchema");

const getAllAbrigo = (request, response) => {
    console.log(request.url);//mostra a url que nosso usuario fez a requisicao

    animaisCollections.find((error, abrigo) => {
        if(error){
            return response.status(500).send(error);
        }else {
            return response.status(200).json({
                mensagem: "GET com sucesso.",
                abrigo
            });
        }
    });
}

const getByNome = (request, response) => {
    const nome = request.params.nome;

    animaisCollections.find({nome: nome}, (error, abrigo) => {
        if(error){
            response.status(500).send(error);
        }else if(abrigo == "") {
            return response.status(400).send("O animal informado não foi encontrado.");
        }else{
            return response.status(200).send({
                mensagem: "GET por nome, feito com sucesso.",
                abrigo
            });
        }
    });
}

const addAbrigo = (request, response) => {
    const abrigoDoBody = request.body; //pegando o body que o usuario digitou
    const abrigo = new animaisCollections(abrigoDoBody); //criando um novo dado com o body

    abrigo.save((error) => {
        if(error){
            return response.status(400).send(error);
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso.",
                abrigo
            });
        }
    });
}

const updateAdocaoByNome = (request, response) => {
    const nomeParam = request.params.nome;
    const adocaoBody = request.body;
    const update = {new: true} //informa que estamos fazendo update e não criando um novo

    animaisCollections.findOneAndUpdate(
        {nome: nomeParam}, 
        adocaoBody, 
        update,
        (error, abrigo) => {
            if(error){
                return response.status(500).send(error)
            }else if (abrigo){
                return response.status(200).send({
                    mensagem: "Campo apto atualizado com sucesso.",
                    abrigo
                });
            }else {
                return response.status(404).send({mensagem: "Animal não encontrado."})
            }
        }
    );
}

const deleteAbrigoByNome = (request, response) => {
    const nomeParam = request.params.nome;
    const deleteBody = request.body;

    animaisCollections.findOneAndDelete(
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
    getAllAbrigo,
    addAbrigo,
    getByNome,
    updateAdocaoByNome,
    deleteAbrigoByNome
}