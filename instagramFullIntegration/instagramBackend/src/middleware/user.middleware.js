const userModel = require("../module/user.module");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const authenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization


        if (!token) {
            res.status(401).json({
                message: "invalid user"
            })
        }

        const data = jwt.verify(token, config.ACCESS_TOKEN)
        const user = await userModel.findById(data.id)

        req.user = user
        next()
    } catch (error) {
        res.status(500).json({
            message: "invvalid users"
        })

    }
}

module.exports = authenticate