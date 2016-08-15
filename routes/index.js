var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Job Applicants', applicants : {id : 1, full_name:'Joe Bloggs'} });
});

module.exports = router;
