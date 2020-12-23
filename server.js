//Importando express e nunjucks
const express = require('express')
const nunjucks = require('nunjucks')

//Dando o servidor a função de um express
const server = express()

//Parte estática do site
server.use(express.static("public"))

//Setando o view engine do servidor
server.set("view engine", "njk")

//Configurando nunjucks
nunjucks.configure("views", {
    express:server
})

//Rendenizando a página
server.get("/about", function(req, res){
    return res.render('about')
})

server.get("/", function(req, res){
    return res.render('courses')
})

//Erro 404
server.use(function(req, res) {
    res.status(404).render("not-found");
});

  
//Rodando o servidor
server.listen(5000, function(){
    console.log('server is running')
})