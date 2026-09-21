const {body,validationResult}=require("express-validator")


const registerValidator=[
    body("email")
    .exists().withMessage("Email field is required").bail()
    .isEmail().withMessage("please enter a valid email addresh").bail()
    .trim()
    .isString().withMessage("email must be string"),
      

     body("name")

    body("number")
    .exists().withMessage("phone enumber is required").bail()
    .trim()
    .isMobilePhone().withMessage("please enter a valid phone number").bail()
    .isString().withMessage("phone number must be string"),

    
    
    


]