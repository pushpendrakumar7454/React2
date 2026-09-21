const userModel = require("../module/user.module");
const bcrypt = require("bcrypt");
const {registerValidator, loginvalidator}=require("../validator/auth.validator")



const authRegisterController=async(req,res)=>{
    try {
        const {name,username,email,password,number}=req.body

        const allreadyExistUser=await userModel.findOne({email})
        if(allreadyExistUser){
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
      

     
     


    } catch (error) {
        return res.status(500).json({
            message:"internal serber error"
        })
    }
}