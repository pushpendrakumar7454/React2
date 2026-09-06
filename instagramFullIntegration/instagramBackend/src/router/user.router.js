const express = require("express")
const { registerUserControllers, meUserControllers } = require("../controllers/user.controllers")
const authenticate = require("../middleware/user.middleware")
const router = express.Router()


router.post("/register", registerUserControllers)
router.get("/me", authenticate, meUserControllers)

module.exports = router