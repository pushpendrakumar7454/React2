const express = require("express")
const { registerUser } = require("../controllers/user.controllers")

const router = express.Router()

router.post('/registeruser', registerUser)

module.exports = router