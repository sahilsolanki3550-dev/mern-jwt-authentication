const User = require("../models/userModel")
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const getUserDetail = async (req, res) => {
    try {
        const email = req.email

        const foundUser = await User.findOne({ email })

        const userDetails = {
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            email: foundUser.email,
            role: foundUser.role
        }
        res.status(200).json({
            success: true,
            message: 'Profile fetched successfully!',
            user: userDetails
        }
        )
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const editUserDetail = async (req, res) => {
    try {


        const email = req.email
        const { firstName, lastName } = req.body



        if (!firstName || !lastName) {
            return res.status(400).json({
                message: "Field could not be empty"
            });
        }

        const updatedUser = await User.findOneAndUpdate({ email }, { firstName, lastName }, { returnDocument: 'after' })
        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success: true,
            message: 'Profile updated successfully!',
            user: {
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


const changePassword = async (req, res) => {
    try {

        const { currentPassword, newPassword } = req.body
        const email = req.email
        if (!currentPassword || !newPassword) {
            return res.status(400).json({
                message: "Field could not be empty"
            });
        }

        
        const user = await User.findOne({email});

        const isMatch = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Current password is incorrect"
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

                user.password = hashedPassword;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Password changed successfully!',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


module.exports = { getUserDetail, editUserDetail, changePassword }

