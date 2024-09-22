const { signup, signin } = require('../controller/authContoller');

const router = require('express').Router();

router.route('/signup').post(signup)
router.route('/signin').post(signin)



module.exports = router