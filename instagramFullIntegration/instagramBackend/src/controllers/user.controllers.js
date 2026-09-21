import userModel from "../module/user.module.js"
import bcrypt from 'bcrypt'
import { generateAccessToken, generateRefreshToken } from "../utils/auth.js"

export const authRegisterController=async(req,res)=>{
    try {
           const {name,email,password,username,number}=req.body
          

           const allreadyExsitsEmail=await userModel.findOne({email})
           
           if(allreadyExsitsEmail){
            return res.status(400).json({
                message:"email allready exists"
            })
           }

           const user=await userModel.create({
            name,
            username,
            email,
            number,
            password:await bcrypt.hash(password,6)
           })

          const accessToken= generateAccessToken({userId:user._id})
          const refreshToken= generateRefreshToken({userId:user._id})

          res.cookie("refreshToken",{
            httpOnly:true
          })

          await userModel.findByIdAndUpdate(user._id,{reshreshToken})

          return res.status(201).json({
            message:"user register succefully",
            data:{
                user:{
                    name:user.name,
                    email:user.email,
                    number:user.number,
                    id:user._id,
                    username:user.username
                },
                accessToken
            }
          })

       
        } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}