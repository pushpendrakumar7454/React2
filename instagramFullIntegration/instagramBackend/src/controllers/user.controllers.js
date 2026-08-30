const User = require("../module/user.module")
const bcrypt = require("bcrypt");

const registerUser = async(req, res) => {
    try {
        const { name, email, number, username, password } = req.body;

        // Check required fields
        if (!name || !email || !number || !username || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check existing email
        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return res.status(409).json({
                message: "Email already registered"
            });
        }

        // Check existing username
        const existingUsername = await User.findOne({ username });

        if (existingUsername) {
            return res.status(409).json({
                message: "Username already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            number,
            username,
            password: hashedPassword
        });

        // Don't send password in response
        const userResponse = {
            _id: user._id,
            name: user.name,
            email: user.email,
            number: user.number,
            username: user.username
        };

        return res.status(201).json({
            message: "User registered successfully",
            user: userResponse
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

module.exports = {
    registerUser
};