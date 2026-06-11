const verifyRole = (role) => {

    return (req, res, next) => {
        
        if (req.role !== role) {
            return res.status(403).json({ message: "Acces denied" });
        }
        next();
    }
}

module.exports = verifyRole