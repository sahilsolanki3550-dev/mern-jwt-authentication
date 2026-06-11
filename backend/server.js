require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3500
const register = require('./routes/register')
const login = require('./routes/login')
const dbConnect = require('./config/dbConnect')
const mongoose = require('mongoose')
const verifyToken = require('./middlewares/verifyToken')
const user =  require('./routes/userRoutes')
const logout =  require('./routes/logout')
const cookieParser = require('cookie-parser')
const admin = require('./routes/adminRoutes')
const cors = require('cors')
const refreshToken = require('./routes/refreshToken')

dbConnect();


const corsOptions = {
  origin: [
    'http://localhost:5173', 
    'https://zmkd6mtk-5173.inc1.devtunnels.ms'
  ], 
  methods: 'GET,POST,PUT,DELETE',  
  credentials: true                
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(cookieParser());
app.get('/', (req,res) => {
    res.status(200).send(`Home Page: ${req.fullName}`)
})

app.use('/register', register)
app.use('/login', login)
app.use('/logout', logout)
app.use('/refresh', refreshToken)

app.use(verifyToken)
app.use('/user', user)
app.use('/admin', admin)



mongoose.connection.once('open',()=>{ 
    console.log("Databse connection success")
    // app.listen(port, ()=>{
    //     console.log(`Server is running on port ${port}`)
    // })
})

module.exports = app;