const cryptography = require("./cryptography.js");
const cript = cryptography.cript;

function test(req, res){
    res.json({"test": "test"});
};

function Cbinary(req, res){
    res.send(cript.binary(req.query.text, req.query.type))
};

function Ccaesar(req, res){
    res.send(cript.caesar(req.query.text, req.query.direction, req.query.key));
};

function Cvigenere(req, res){
    res.json({"test": "test"});
};

function Cautokey(req, res){
    res.json({"test": "test"});
};

function Cpolybius(req, res){
    res.json({"test": "test"});
};

function Cnihilist(req, res){
    res.json({"test": "test"});
};

exports.test = test;
exports.Cbinary = Cbinary;
exports.Ccaesar = Ccaesar;
exports.Cvigenere = Cvigenere;
exports.Cautokey = Cautokey;
exports.Cpolybius = Cpolybius;
exports.Cnihilist = Cnihilist;