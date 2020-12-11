# API A4.ONG - Projeto Final {Reprograma}

## 🚀 Descrição

API desenvolvida como Projeto Final para a conclusão do curso de Back-end  de [{Reprograma}](https://reprograma.com.br/) em parceria com a XP Inc.

API para a Associação dos Amigos dos Animais Abandonados (A4) que presto serviço voluntária. A A4 é uma organização não governamental (ONG) de animais localizada em Campina Grande, interior da Paraíba, ela é responsável por um abrigo que acolhe cachorros e gatos abandonados.

A partir daí podemos gerenciar melhor os animais que estão no abrigo, os doadores e mapear os projetos que a ONG abraça, como a feira de adoção, a divulgação dos animais que estão desaparecidos, a orientação à população acerca de leis sobre maus tratos e abandonos, o projeto de instalação de comedouros e bebedouros, entre outros.

Para conhecer mais sobre o trabalho da [ONG](https://www.instagram.com/a4.ong/?hl=pt-br). 
Descrição completa do projeto, em [A4.ONG](/assets/api-a4ong.pdf).

# Sumário
=================
<!--ts-->
   * [Objetivos](#objetivos)
   * [Aprendizados](#aprendizados)
   * [Arquitetura Model View Controller](#arquitetura)
   * [Instalação](#instalação)
      * [Pre Requisitos](#pré-requisitos)
      * [Rodando o Back-end](#rodando-o-back-end)
      * [Tecnologias](#tecnologias)
      * [Features](#features)
      * [Rotas](#rotas)
   * [Modelo com campos obrigatórios para teste: Postman ou Insomnia](#modelo-com-campos-obrigatórios-para-teste)
<!--te-->

## Objetivos

- Mapeamento do perfil e necessidades dos refugiados através de cadastros na API;
- Desenvolvimento de uma rede de apoio mútuo entre refugiados, sociedade civil, ONGs, empresas através de cadastros;
- Auxiliar no fomento de políticas públicas a partir dos dados obtidos;

## Aprendizados

Para a execução do projeto final, desenvolvemos uma API fundamentada no modelo que utiliza quatro operações básicas, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). Dessa forma podemos trabalhar com as informações dispostas em um banco de dados NoSQL. Para acessar e tratar as operações, o código foi organizado em uma Arquitetura embasada no sistema Model View Controller (MVC).

## Arquitetura

        Arquitetura MVC
        |
        \--📂 API-A4.ONG 
            |   .env
            |   .env_exemplo
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   Procfile
            |   README.md 
            |   **server.js**
            \--📂 node_modules
            \--📂 assets
            \--📂src
                |
                |
                📂---controllers
                |       animaisController.js
                |       animaisDesaparecidosController.js
                |       doadoresController.js
                |
                📂---models
                |       animaisSchema.js
                |       animaisDesaparecidosSchema.js
                |       doadoresSchema.js
                |       
                |
                📂---routes
                |       animaisRoutes.js
                |       animaisDesaparecidosRoute.js
                |       doadoresRoute.js
                |__     index.js


Clique para visualizar o desenho da [Arquitetura](/assets/api-a4ongarquitetura.png)


## Instalação
* Para realizar o download do projeto, sigam as instruções:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o database NoSQL [Mongodb](https://www.mongodb.com/)
Além disto é bom ter um editor para trabalhar com o código, recomento o [VSCode](https://code.visualstudio.com/)

### Rodando o Back End 

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone <https://github.com/lilianhteixeira/API-A4.ONG>

# Acesse a pasta do projeto no terminal/cmd
$ cd API-A4.ONG

# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
# Mongo conectado em mongodb://localhost:27017/a4ong
```
* Modifique `.env` para receber as variáveis de ambiente e substitua para que seu servidor funcione adequadamente.

Para acessar via Heroku, acesse o [link da API](https://a4ong.herokuapp.com/)

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para chamar e testar os endpoints da API localmente ou via Heroku.

## Tecnologias

Para a consturição do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [heroku](https://dashboard.heroku.com/apps)

### Features

Funcionalidades da aplicação

- [x] Cadastros - POST
- [x] Busca por nome - GET
- [x] Update em campo específico - PATCH
- [x] Apagar - DELETE

### Rotas

* local: http://localhost:8080

* MongoDB: [mongodb://localhost:27017/a4ong]

* Heroku: https://a4ong.herokuapp.com/


#### Retorna teste com apresentação 
{ mensagem: O app está rodando em http://localhost:8080 }
- [x] "/" 

#### Retorna todos os dados do banco de dados
- [x] "/animais" 
- [x] "/desaparecidos" 
- [x] "/doadores"

#### Cria novo cadastro ou postagem e retorna mensagem amigável
- [x] "/**/criar" 

#### Retorna cadastro por nome específico
- [x] "**/nome/[NOME]" 

#### Deleta cadastro por nome específico e retorna mensagem amigável
- [x] "/**/del/[NOME]" 


#### Atualiza somente o campo escolhido do cadastro por nome específico e retorna mensagem amigável
- [x] "/**/campo/[NOME]" 


## Modelo com campos obrigatórios para teste

###  Animais Abrigo

    {
            "nome":"Bob" ,
            "raca": "Vira-lata",
            "peso": "10",
            "aptoAdocao": "sim",
            "especie": "cachorro"
    }

#### Animais Desaparecidos
    {
            "nome": "Ray",
            "raca": "Pitbull",
            "foto": "www.cachorro.com/fotoDoguinho",
            "telefoneResponsavel": "(83)90001-0005)"      
    }

### Doadores

    {
                "nome": "Lilian",
                "endereco": "Rua 123",
                "telefone": "(83)90001-0005)",
                "formaPagamento": "boleto"
    }


### 🚧 Projeto em Construção

        Troco solidário
        Comedouros e Bebedouros
        Sistema de Login

