const express = require("express");
const bodyp = require("body-parser");
const router = require("./rotas.js");

const app = express();

app.use(bodyp.json());

app.use(bodyp.urlencoded({
    extended:false
}));

app.use("/", router);

module.exports = app;