const express = require("express");
const router = express.Router();
const allUsers  = require("../controllers/AllUser")
const addUser  = require("../controllers/AddUser")
const friend = require("../controllers/FriendList")
const storeMessage = require("../controllers/StoreMessages")
const retriveMessage = require("../controllers/retriveMessage")
const removeFriend = require("../controllers/removeFriend")

router.get("/AllUsers", allUsers.users)
router.post("/AddFriend", addUser.user)
router.post("/FriendsList", friend.users)
router.post("/storeMessage", storeMessage.storeMessage)
router.get("/retriveMessage",retriveMessage.retriveMessage)
router.post("/removeFriend",removeFriend.deleteUser)

module.exports = router