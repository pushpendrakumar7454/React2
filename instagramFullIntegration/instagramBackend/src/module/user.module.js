const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    number: {
        type: String,
        required: true,
        minlength: [10, "Minimum 10 characters are required"],
        maxlength: [10, "Maximum 10 characters are required"]
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;