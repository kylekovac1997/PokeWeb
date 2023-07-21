const express = require("express")
const router = express.Router()
const UserLogout = require("../controllers/logout")

router.post("/logout", UserLogout.logout)

module.exports = router