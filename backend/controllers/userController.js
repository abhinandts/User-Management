
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {

        console.error("Registration error:", error);
        res.status(500).json({
            message: "An error occurred during registration"
        });
    }
}

module.exports = {
    register
}