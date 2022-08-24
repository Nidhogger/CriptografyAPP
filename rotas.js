const express = require("express");
const controler = require("./controler.js");

const router = express.Router();

router.get("/test", controler.test);

router.get("/Binary", controler.Cbinary);

router.get("/CaesarCipher", controler.Ccaesar);

router.get("/VigenereCipher", controler.Cvigenere);

router.get("/AutokeyCipher", controler.Cautokey);

router.get("/PolybiusSquare", controler.Cpolybius);

router.get("/NihilistCipher", controler.Cnihilist);

module.exports = router;