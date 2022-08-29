const express = require("express");
const bodyp = require("body-parser");
const router = require("./rotas.js");

const app = express();

app.use(function(req,res,next){
    if(req.path === "/CaesarCipher"){
        if(req.query.text == "" || req.query.text == null || req.query.text == undefined){
            res.status(400).send("houve um problema com o texto. ")
        }
        if(req.query.direction != "left" && req.query.direction != "right"){
            res.status(400).send("houve um problema com a direção. ")
        }
        if(/\d/g.test(req.query.key)){
            
        }else{
            res.status(400).send("houve um problema com a Key. ")
        }
    }
    if(req.path === "/Binary"){
        if(req.query.text == "" || req.query.text == null || req.query.text == undefined){
            res.status(400).send("houve um problema com o texto. ")
        }
        if(req.query.type != "Decript" && req.query.type != "Encript"){
            res.status(400).send("houve um problema com o type. ")
        }
    }
    if(req.path === "/VigenereCipher"){
        if(req.query.text == "" || req.query.text == null || req.query.text == undefined){
            res.status(400).send("houve um problema com o texto. ")
        }
        if(req.query.direction != "left" && req.query.direction != "right"){
            res.status(400).send("houve um problema com a direção. ")
        }
        if(req.query.key == "" || req.query.key == null || req.query.key == undefined){
            res.status(400).send("houve um problema com a key. ")
        }
    }
    if(req.path === "/PolybiusSquare"){
        if(req.query.text == "" || req.query.text == null || req.query.text == undefined){
            res.status(400).send("houve um problema com o texto. ")
        }
        if(req.query.type != "Decript" && req.query.type != "Encript"){
            res.status(400).send("houve um problema com o type. ")
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