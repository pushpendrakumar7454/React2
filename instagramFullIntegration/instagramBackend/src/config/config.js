const dotenv = require("dotenv")
dotenv.config()
const config = {
    MONGO_URI: process.env.MONGO_URI,
    ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN
}
module.exports = config