const userModel = require("../module/user.module");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");

const registerUserControllers = async(req, res) => {
    try {
        const { email, name, password } = req.body;

        if (!email || !name || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check existing user
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "Email already registered"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            email,
            name,
            password: hashedPassword
        });

        const token = jwt.sign({ id: user._id },
            config.ACCESS_TOKEN
        );

        return res.status(201).json({
            message: "User registered successfully",
            data: {
                user: {
                    email: user.email,
                    name: user.name
                },
                token
            }
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

const meUserControllers = async(req, res) => {
    try {
        console.log(req.user)
        return res.status(200).json({
            message: "user find succefully",
            data: {
                user: req.user
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}


module.exports = { registerUserControllers, meUserControllers }