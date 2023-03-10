const { Router } = require('express');
const authController = require('../controller/employeeController');
const router = Router();
const auth = require('../middleware/auth');
var bodyParser = require('body-parser')


router.post('/register', authController.signup);
router.get('/login', authController.login);
router.get('/user', auth, authController.get_User);

module.exports = router;