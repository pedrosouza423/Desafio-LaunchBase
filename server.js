//Importando express e nunjucks
const express = require('express')
const nunjucks = require('nunjucks')

//Dando o servidor a função de um express
const server = express()

//Importando o data
const posts = require('./data')

//Parte estática do site
server.use(express.static("public"))

//Setando o view engine do servidor
server.set("view engine", "njk")

//Configurando nunjucks
nunjucks.configure("views", {
    express:server
})

//Rendenizando a página
server.get("/", function(req, res){
    const about = {
        image_url:'https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh.jpg',
        name:'Rocketseat',
        content:'Uma empresa de educação na área tecnologica, somos uma comunidade incrível de programadores em busca do próximo nível.',
        tecnologias:[
            {link:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png', name:'NodeJs'},
            {link:'https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg', name:'ReactJS'},
            {link:'https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png', name:'ReactNative'}
        ],
        foots:[
            {link:'https://github.com/Rocketseat', name:'Github'},
            {link:'"https://www.instagram.com/rocketseat_oficial/', name:'Instagram'},
            {link:'https://www.facebook.com/rocketseat', name:'Facebook'}

        ]
    }
    return res.render('about' , {about})
})

server.get("/content", function(req, res){
    return res.render('content', {posts})
})

//Erro 404
server.use(function(req, res) {
    res.status(404).render("not-found");
});

  
//Rodando o servidor
server.listen(5000, function(){
    console.log('server is running')
})