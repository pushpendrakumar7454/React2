import express from 'express'
import { registerValidator } from '../validator/auth.validator.js'
import { authRegisterController } from '../controllers/user.controllers.js'

const router = express.Router()


router.post("/register",registerValidator,authRegisterController)

export default router