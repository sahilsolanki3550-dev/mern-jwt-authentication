const User = require('../models/userModel')
const handleLogout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken
      if (!refreshToken) {
        res.clearCookie('refreshToken', cookieOptions);
        return res.status(200).json({ message: "Logout success" });
    }
    const foundUser = await User.findOne({ refreshToken })
    if (!foundUser) {
        res.clearCookie('refreshToken', { httpOnly: true });
        return res.status(200).json({ message: "Logout succes" })
    }
    foundUser.refreshToken = ''
    await foundUser.save()

    res.clearCookie('refreshToken', { httponly: true });

    return res.status(200).json({ message: "Logout succes" })

    
}

module.exports = { handleLogout }