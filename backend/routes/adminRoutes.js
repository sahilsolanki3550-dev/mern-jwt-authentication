const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
const verifyRole = require('../middlewares/verifyRole')

router.get('/profile/', verifyRole('admin'), adminController.getAdminDetail)
    
router.get('/users',verifyRole('admin'), adminController.getAllUsers)
router.post('/users/',verifyRole('admin'), adminController.addUser)
router.put('/users/:id',verifyRole('admin'), adminController.editUserById)
router.delete('/users/:id',verifyRole('admin'), adminController.deleteUserById)
    

module.exports = router