const express = require('express');
const router = express.Router();
const registerInitialChecks=require('../middleware/registerChecks')
const register=require('../controllers/register');
// @requires{email,FN,LN,pWD Con PWD} - accept it from req.body
// @despription
// sacutity,performance,edge cases
// LEVEL 1
// email validate - .com ,.co
// pwd validation 
// passwor==con pwd
// LEVEL 2
// check for {JS / SQL } Injecton
// LEVEL 3 (because we will have to connect to the DB)
// Check if emails alreagy exists
// password hash
// convery email to lower case
// save 

// Now creating middleware for each level

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/register",registerInitialChecks,register);
module.exports = router;
