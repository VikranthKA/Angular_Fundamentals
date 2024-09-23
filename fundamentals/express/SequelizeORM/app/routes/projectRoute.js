const { signup, signin } = require('../controller/authContoller');
const { createProject } = require('../controller/projectCltr');

const router = require('express').Router();

router.route('/createproject').post(createProject)



module.exports = router