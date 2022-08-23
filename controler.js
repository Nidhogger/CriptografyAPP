const cryptography = require("./cryptography.js");
const cript = cryptography.cript;

function test(req, res){
    res.json({"test": "test"});
};

function Cbinary(req, res){
    res.send(cript.binary(req.query.text, req.query.type))
};

exports.test = test;
exports.Cbinary = Cbinary;