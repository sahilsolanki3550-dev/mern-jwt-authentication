const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    
    const authHeder = req.headers['authorization']
    const token  = authHeder.split(' ')[1];
    if(!token){
        return res.status(401).send("Acces Denied: Token Missing");
    }

    // console.log(token)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err) return res.status(403).send("Invalid Token")
            req.firstName = decoded.UserInfo.firstName
            req.lastName = decoded.UserInfo.lastName
            req.email = decoded.UserInfo.email
            req.role = decoded.UserInfo.role
            next();
        }
     )    
}

module.exports = verifyToken