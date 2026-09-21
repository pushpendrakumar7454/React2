const jwt=require("jsonwebtoken")
const config = require("../config/config")


const generateAccessToken=({userId})=>{
    return jwt.sign({userId},config.ACCESS_TOKEN,{expiresIn:"15m"})
}


const generateRefreshToken=({userId})=>{
    return jwt.sign({userId},config.REFRESH_TOKEN,{expiresIn:"7d"})
}


module.exports={generateAccessToken,generateRefreshToken}