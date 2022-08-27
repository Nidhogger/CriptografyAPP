const express = require("express");
const bodyp = require("body-parser");
const router = require("./rotas.js");

const app = express();

app.use(function(req,res,next){
    if(req.path === "/CaesarCipher"){
        let mensagem = "";
        if(req.query.text == "" || req.query.text == null || req.query.text == undefined){
            mensagem += "houve um problema com o texto. ";
            res.send(mensagem)
        }
        if(req.query.direction != "left" && req.query.direction != "right"){
            mensagem += "houve um problema com a direção. "
            res.send(mensagem)
        }
        if(/\d/g.test(req.query.key)){
            
        }else{
            mensagem += "houve um problema com a Key. "
            res.send(mensagem)
        }
    }
    if(req.path === "/Binary"){
        let mensagem = "";
        if(req.query.text == "" || req.query.text == null || req.query.text == undefined){
            mensagem += "houve um problema com o texto. ";
            res.send(mensagem)
        }
        if(req.query.type != "Decript" && req.query.type != "Encript"){
            mensagem += "houve um problema com o type. "
            res.send(mensagem)
        }
    }
    next();
});

app.use(bodyp.json());

app.use(bodyp.urlencoded({
    extended:false
}));

app.use("/", router);

module.exports = app;