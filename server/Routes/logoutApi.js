const express = require("express")
const router = express.Router()
const UserLogout = require("../Controllers/logout")

router.post("/logout", UserLogout.logout)

module.exports = router