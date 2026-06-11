const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URI)
    } catch (error) {
        console.error('MongoDB Error:', error.message);
    }
}

module.exports = dbConnect