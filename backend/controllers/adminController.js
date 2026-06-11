const User = require('../models/userModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const getAdminDetail = async (req, res) => {
    try {
        const email = req.email

        const foundAdmin = await User.findOne({ email })

        const adminDetails = {
            firstName: foundAdmin.firstName,
            lastName: foundAdmin.lastName,
            email: foundAdmin.email,
            role: foundAdmin.role
        }
        res.status(200).json({
            message: 'Profile fetched successfully!',
            admin: adminDetails
        }
        )
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const getAllUsers = async (req, res) => {
    try {

        const users = await User.find({})

        if (!users || users.length === 0) {
            return res.status(404).json({
                message: 'No users found'
            });
        }
        res.status(200).json({users})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}

const addUser = async (req, res) => {
    try {
            console.log("addUser controller called");
        const { firstName, lastName, email, password, role } = req.body;

        if (!firstName || !lastName || !email  || !password || !role ) return res.status(400).json({ message: "All fields are required" }) //400- bad request

        const userExist = await User.findOne({ email })

        const hashedPassword = await bcrypt.hash(password, 10)  
        if (userExist) return res.status(409).json({ success:"false", message: "User already registerd" })

        const userCreate = await User.create({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": hashedPassword,
            "role": role
        })

        if (!userCreate) {
            return res.status(401).send("User adding failed")
        }
        res.status(201).json({
            success: true,
            message: "User addde succesfully",
            data: userCreate,
        })
    } catch (error) {
        res.send(error)
        console.error(error)
    }
}


const editUserById = async (req, res) => {
    const id = req.params.id
    const { firstName, lastName, email, password, role } = req.body
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, email, password, role }, {returnDocument: 'after' })

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(
            {
                message: "User Upadated successfully",
                updatedUser
            }
        );

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error", error: error.message });
    }

}



const deleteUserById = async (req, res) => {
    const id = req.params.id
    const deletedUser = await User.findByIdAndDelete(id)
    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
        message: "User deleted successfully",
        userId: deletedUser._id
    });
}


module.exports = { getAdminDetail, getAllUsers, addUser, editUserById, deleteUserById }