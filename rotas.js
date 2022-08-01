const express = require("express");
const controler = require("./controler.js");

const rote = express.Router();

rote.get("/banana", controler.test);

module.exports = rote;