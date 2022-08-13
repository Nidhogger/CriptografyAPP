const express = require("express");
const controler = require("./controler.js");

const router = express.Router();

router.get("/test", controler.test);

module.exports = router;