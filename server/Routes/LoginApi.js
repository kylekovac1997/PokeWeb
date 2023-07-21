const express = require('express');
const router = express.Router();
const userLogin = require("../controllers/Login");


router.post("/login", userLogin.login)

module.exports = router