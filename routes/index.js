var util = require('util');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/:a', function(req, res, next) {
  var p1=req.param('a');//params body query 
  var p2=req.params.a;//params
  var p3=req.body.a;//post
  var p4=req.query.a;//query
  res.render('index', { title: 'Express',p1:p1,p2:p2,p3:p3,p4:p4 });
});

router.get('/', function(req, res, next) {

  var p1=req.param('a');//params body query 
  var p2=req.params.a;//params
  var p3=req.body.a;//post
  var p4=req.query.a;//query
  res.render('index', { title: 'Express',p1:p1,p2:p2,p3:p3,p4:p4 });
});

module.exports = router;
