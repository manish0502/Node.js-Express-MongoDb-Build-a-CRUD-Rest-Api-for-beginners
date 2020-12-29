var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Api Development'  , subtitle:'this is express engine'});
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  var courseName = req.query.course;
  let courseTitle = 'Manish Tutorials - ' +courseName;
  console.log(req.query.course)
  res.render('index', { title: courseTitle , subtitle:'this is a '+courseName +' demo'});
});

module.exports = router;
