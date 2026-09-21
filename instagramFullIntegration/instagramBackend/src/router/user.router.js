import express from 'express'
import { loginvalidator, registerValidator } from '../validator/auth.validator.js'
import { authLoginController, authRefreshController, authRegisterController } from '../controllers/user.controllers.js'

const router = express.Router()


router.post("/register",registerValidator,authRegisterController)
router.post("/login",loginvalidator,authLoginController)
router.post("/refresh",authRefreshController)

export default router