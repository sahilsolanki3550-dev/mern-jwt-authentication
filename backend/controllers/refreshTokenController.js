const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        console.log("refreshToken", refreshToken)
        if (!refreshToken) {
            return res.status(401).json({ message: "Refresh Token is missing" })
        }


        const foundUser = await User.findOne({ refreshToken })
        console.log(foundUser)
        if (!foundUser) {
            return res.status(403).json({ message: "User not found" })
        }


        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {

                if (err) {
                    return res.status(403).json({
                        message: "Refresh token expired"
                    });
                }

                if (foundUser.email !== decoded.email) {
                    return res.status(403).json({
                        message: "Invalid token"
                    });
                }

                const newAccessToken = jwt.sign(
                    {
                        "UserInfo": {
                            "firstName": foundUser.firstName,
                            "lastName": foundUser.lastName,
                            "email": decoded.email,
                            "role": foundUser.role
                        }
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn: "15m"
                    }
                )
                res.status(200).json({
                    accessToken: newAccessToken
                });

            }
        )

    } catch (error) {
        return res.status(403).json({
            message: "Somthing went wrong"
        });
    }
}

module.exports = { refreshToken }