const express = require('express');
const router = express.Router();
const {Authentication} = require('../middleware/authentication')
const { signup, signin, logout, allUsers } = require('../controllers/userController');

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/logout").get(logout);
router.route("/alluser/:searchtext").get(Authentication,allUsers)

module.exports = router;