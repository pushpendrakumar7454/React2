const {body,validationResult}=require("express-validator")


const registerValidator=[
    body("email")
    .exists().withMessage("Email field is required").bail()
    .isEmail().withMessage("please enter a valid email addresh").bail()
    .trim()
    .isString().withMessage("email must be string"),
      

     body("username")
    .exists().withMessage("Username is required")
    .isString().withMessage("Username must be a string")
    .isLength({ min: 3, max: 20 }).withMessage("Username must be between 3 and 20 characters")
    .matches(/^[a-zA-Z0-9_]+$/).withMessage("Username can contain only letters, numbers and underscore"),

     body("name")
     .exists().withMessage("name is required")
     .trim()
     .isString().withMessage("number must be string")
     .isLength({min:3,max:50}).withMessage("name must be between 3 and 20 characters"),

     body("number")
    .exists().withMessage("phone enumber is required").bail()
    .trim()
    .isMobilePhone().withMessage("please enter a valid phone number").bail()
    .isString().withMessage("phone number must be string"),

    body("password")
    .exists().withMessage("password is required")
    .trim()
    .isString().withMessage("password must be string")
    .isLength({min:6}).withMessage("password must be 6 character"),

    (req,res,next)=>{
        const errors=validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"invalid request",
                errors:errors.array()
            })
        }
        next()
    }
    
]


const loginvalidator=[
    body("email")
    .exists().withMessage("Email field is required").bail()
    .isEmail().withMessage("please enter a valid email addresh").bail()
    .trim()
    .isString().withMessage("email must be string"),


     body("password")
    .exists().withMessage("password is required")
    .trim()
    .isString().withMessage("password must be string")
    .isLength({min:6}).withMessage("password must be 6 character"),

     (req,res,next)=>{
        const errors=validationResult(req)
       if(errors.isEmpty()){
        return res.status(400).json({
            message:"invalid request",
            errors:errors.array()
        })
       }
       next()
     }
]

module.exports={registerValidator,loginvalidator}