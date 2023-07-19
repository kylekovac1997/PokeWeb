const express = require('express');
const router = express.Router();
const UserLogin = require("../Controllers/Login")

router.post("/login", UserLogin.login)

module.exports = router