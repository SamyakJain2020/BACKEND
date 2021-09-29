var express = require('express');
var router = express.Router('');
const initialChecks = require('../middleware/initialChecks');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register',initialChecks,register);
module.exports = router;