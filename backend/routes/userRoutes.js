const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const verifyRole = require('../middlewares/verifyRole')

router.route('/profile' )
    .get(verifyRole('user'), userController.getUserDetail)
    .put(verifyRole('user'), userController.editUserDetail)

router.put('/change_password', verifyRole('user'), userController.changePassword)

module.exports = router;