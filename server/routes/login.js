var express = require('express');
var router = express.Router();

const LoginControllers = require("../controllers/LoginControllers.js")
const controllers = new LoginControllers()

/* GET users listing. */
router.post('/', controllers.loginUser);

module.exports = router;
