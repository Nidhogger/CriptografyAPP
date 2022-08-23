const cryptography = require("./cryptography.js");
const cript = cryptography.cript;

function test(req, res){
    res.json({"test": "test"});
};

function Cbinary(req, res){
    console.log(cript.binary("01110100 01100101 01110011 01110100 ", "Decript"));
};

exports.test = test;
exports.Cbinary = Cbinary;