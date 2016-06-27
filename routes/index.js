var express = require('express');
var router = express.Router();
var mailService = require('../services/mail.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scryber Security' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.post('/contact', function(req, res, next) {
  var input = req.body;
  if(input.email){
  	mailService.sendContactEmail(input.email,input.name, function(error,body){  		
  		if(error){
  			console.log('Error in sending mail:',error);

  		}else{
  			console.log('Success sending mail', body);
  			res.send("Okay");
  		}
  	})
  }
  
});

module.exports = router;
