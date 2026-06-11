const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!password || !email) return res.status(400).json({ message: "All fields are required" }) //400- bad request

        const user = await User.findOne({ email })
        if (!user) return res.status(401).json({ message: "User not found with this email" })

        const verifyPassword = await bcrypt.compare(password, user.password);

        if(!verifyPassword) return res.status(401).json({ message: "Incorrect password" })

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "firstName":user.firstName,
                    "lastName":user.lastName,
                    "email": user.email,
                    "role": user.role
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "15m"
            }
        )

        const refreshToken = jwt.sign(
            { "email": user.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        )

        user.refreshToken = refreshToken;
        const response =  await user.save();
        
        
        res.cookie('refreshToken', refreshToken, { httpOnly: true })
        res.status(201).json({
            success: true,
            message: "Login Successfull",
            role:user.role,
            accessToken
        })
    } catch (error) {
        res.send(error)
        console.error(error)
    }
}

module.exports = { userLogin }