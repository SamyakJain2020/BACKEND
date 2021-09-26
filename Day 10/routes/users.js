var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/file', function(req, res, next) {
  // res.send('respond with a resource');
  res.sendFile(path.join(__dirname ,'/a.png'));
});

router.get('/aa/:filename', function(req, res, next) {
  // res.send('respond with a resource');
  res.sendFile(path.join(__dirname , '../public/stylesheets/style.css'));
});
module.exports = router;
