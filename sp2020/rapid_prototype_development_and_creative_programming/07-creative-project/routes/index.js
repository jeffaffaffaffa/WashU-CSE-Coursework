const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.send({ message: 'Connection Established from index' });

// });

router.get('/', function(req, res){
  if(req.session.page_views){
      req.session.page_views++;
      res.send({message: 'Connection Established from index', numTimes: "You visited this page " + req.session.page_views + " times"});
  } else {
      req.session.page_views = 1;
      res.send({message: 'Connection Established from index', numTimes: "Welcome to this page for the first time!"});
  }
});

module.exports = router;
