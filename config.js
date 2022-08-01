const express = require("express");
const bodyp = require("body-parser");
const rote = require("./rotas.js");

const app = express();

app.use(bodyp.json());

app.use(bodyp.urlencoded({
    extended:false
}));

app.use("/", rote);

module.exports = app;