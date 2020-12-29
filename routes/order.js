var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  // we just define the routes but not write any logic here
});

module.exports = router;
