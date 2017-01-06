var express = require('express');
var router = express.Router();
var app = express();




var mailService = require('../services/mail.js');


//redirect for www to naked-domain
router.get('/*', function(req, res, next) {
  if (req.headers.host.match(/^www/) !== null ) {
    res.redirect('http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();     
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setLocale(req.cookies.i18n ? req.cookies.i18n:'en');
  res.render('index', { 
    i18n: res  
    })
});

router.get('/thankyou', function (req, res) {
    res.render('thankyou', {
    i18n: res
    })
});

router.get('/en', function (req, res) {
    res.cookie('i18n', 'en');
    res.redirect('/')
});

router.get('/hk', function (req, res) {
    res.cookie('i18n', 'hk');
    res.redirect('/')
});

router.get('/zh', function (req, res) {
    res.cookie('i18n', 'zh');
    res.redirect('/')
});


router.post('/contact', function(req, res, next) {
  var input = req.body;

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
