var express = require('express');
var router = express.Router();
var app = express();


var mailService = require('../services/mail.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scrybersecurity' });
});
  
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/thankyou', function(req, res, next) {
  res.render('thankyou', { title: 'Express' });
})

router.post('/contact', function(req, res, next) {
  var input = req.body;
  // return res.send(input);

  // console.log(input.number);
  // console.log(input.email);
  // console.log(input.name);

  //  if(!input.email) {
  //   return res.redirect('/');
  // }

  if(input.email){
  	mailService.sendContactEmail(input.email,input.name, input.number, input.needed, input.date, function(error,body){  		
  		if(error){
  			console.log('Error in sending mail:',error);
        return res.status(400).send(error);
  		}else{
  			console.log('Success sending mail', body);
        return res.redirect('thankyou');
  			return res.send("Okay");
  		}
  	})
  }
  
});

module.exports = router;
