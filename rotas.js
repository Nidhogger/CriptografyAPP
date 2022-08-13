const express = require("express");
const controler = require("./controler.js");

const router = express.Router();

router.get("/test", controler.test);

router.get("/Binary", controler.Cbinary);

module.exports = router;