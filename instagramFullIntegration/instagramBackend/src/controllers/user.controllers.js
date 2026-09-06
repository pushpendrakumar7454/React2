const userModel = require('../module/user.module')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


export const registerUserControllers = async(req, res) => {
    try {
        const { email, name, password } = req.body
        if (!email || !password) {
            return res.status(401).json({
                message: "aunotarrized user"
            })
        }

        const user = await userModel.create({
            email,
            name,
            password: await bcrypt.hash(password, 10)
        })
        const token = jwt.sign({ id: user._id }, token)

    } catch (error) {

        res.status(500).json({
            message: "internal server error"
        })
    }
}