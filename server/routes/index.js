var express = require('express');
var router = express.Router();

const SignUpControllers = require("../controllers/SignUpControllers.js")
const controllers = new SignUpControllers()
/* GET home page. */
router.get('/', controllers.getUsers);
router.post("/", controllers.creatUser)
module.exports = router;
