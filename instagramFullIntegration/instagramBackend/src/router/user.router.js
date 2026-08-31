const express = require("express")
const { registerUser, loginUser } = require("../controllers/user.controllers")

const router = express.Router()

router.post('/registeruser', registerUser)
router.post("/me", loginUser)

module.exports = router