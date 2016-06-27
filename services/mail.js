var api_key = 'key-6d4aa2664b40bc0ae30e013655acf033';
var domain = 'scrybersecurity.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var from = 'Scrybersecurity <contact@scrybersecurity.com>';

module.exports.sendContactEmail = function(email,name,cb){
//   var welcomeEmail = "<html><head><meta charset='UTF-8' /></head><body style='max-width:600px; width:auto; font-family:-apple-system, Lato, Helvetica, Arial; font-size:16; margin:0 auto; display: block; padding:0 6px; text-align: center; background: white'><img src='http://near.pro/images/logo-newsletter.png' style='display:block; width:100px; margin:30px auto;'/><h2 style='font-size:20;'>Welcome "+name+"</h2><p>Thank you for joining <br/><b>Near - Professional Networking</b></p><br/><img src='http://near.pro/images/icon-search@2x.png' width='40px'><p>Search #Events or #Groups<br/>using their Twitter #hashtag</p><img src='http://near.pro/images/icon-find@2x.png' width='40px'><p>Find the right connection<br/>using powerful filters</p>  <img src='http://near.pro/images/icon-connect@2x.png' width='40px'><p>Connect instantly through in-app<br/>messaging and meet face to face</p><img src='http://near.pro/videos/near-professional-networking-app.gif' style='display:block; width:300px; margin:50px auto; border-radius: 4px; border:1px solid #CCC'/><p>We simply aim at offering you the best networking experience<br/>before, during and after any #Event</p><p><a href='http://near.pro/pages/thank-you.html' style='color:#25B9DC;'>Share Near</a> with your contacts</p><p>Any questions or feedback, <a href='mailto:contact@near.pro?subject=About%20Near%20-%20Welcome%20Email&body=Hello%2C%20about%2...' style='color:#25B9DC;'>email us</a></p><p>The Near Team<br /><a href='http://near.pro/' style='color:#25B9DC;'>NEAR.PRO</a></p><a href='https://twitter.com/near_pro' style='display:block; width:33.3%; float:left; margin: 40px 0'><img src='http://near.pro/images/icon-twitter@2x.png' width='26px' style='margin:0 auto; display:block;'/></a><a href='https://www.facebook.com/nearproapp/' style='display:block; width:33.3%; float:left; margin: 40px 0'><img src='http://near.pro/images/icon-facebook@2x.png' width='26px' style='margin:0 auto; display:block;'/></a><a href='https://plus.google.com/+NearProapp/posts' style='display:block; width:33.3%; float:left; margin: 40px 0'><img src='http://near.pro/images/icon-google-plus@2x.png' width='26px' style='margin:0 auto; display:block;'/></a></body></html>"
  try{
	console.log(email);
		var welcomeEmail = `<html>
				<head>
					<meta charset='UTF-8'/>
				</head>
				
				<body style='max-width:600px; width:auto; font-family:-apple-system, Lato, Helvetica, Arial; font-size:16; margin:0 auto; display: block; padding:0 6px; text-align: center; background: white'>
					<div style="background-color:black; padding-top: 15px; padding-bottom: 15px;">
						<img src='http://45.55.172.39/images/ScryberLogo.png' style='display:block; height:70px;'/>
					</div>
					<p style='font-size: 2rem;'>Hi ${name},</p>
					<center>
						<p>Your email has been received! Thank you very much</p>
					</center>
				</body>
			</html>`;
			var data = {
		    from: from,
		    to: email,
		    subject: 'Welcome to Scrybersecurity',
		    html : welcomeEmail
		  };


		  mailgun.messages().send(data, function(err,body){
			cb(err,body);
		  });
}catch(e){
	cb(e,null);
}
	
}



// http://45.55.172.39/images/ScryberLogo.png