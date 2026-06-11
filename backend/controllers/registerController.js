const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !password || !email) return res.status(400).json({ message: "All fields are required" }) //400- bad request

        const userExist = await User.findOne({ email })

        const hashedPassword = await bcrypt.hash(password, 10)
        if (userExist) return res.status(409).json({ success:"false", message: "User already registerd" })

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "firstName":firstName,
                    "lastName":lastName,
                    "email": email,
                    "role": "user"
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "15m"
            }
        )

        const refreshToken = jwt.sign(
            { "email": email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        )
        const userCreate = await User.create({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": hashedPassword,
            "refreshToken": refreshToken
        })

        if (!userCreate) {
            return res.status(401).send("Registration failed")
        }
        
        res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000  })
        res.status(201).json({
            success: true,
            message: "Registration successfull",
            data: userCreate,
            accessToken
        })
    } catch (error) {
        res.send(error)
        console.error(error)
    }
}

module.exports = { registerUser }