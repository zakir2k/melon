var api_key = 'key-0nysa37kiqt0cubwrz-g0gzvuis4pg-0';
var domain = 'melonhk.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var from = 'Melong Hong Kong <team@melonhk.com>';

module.exports.sendContactEmail = function(email, name, needed, cb){
//   var welcomeEmail = "<html><head><meta charset='UTF-8' /></head><body style='max-width:600px; width:auto; font-family:-apple-system, Lato, Helvetica, Arial; font-size:16; margin:0 auto; display: block; padding:0 6px; text-align: center; background: white'><img src='http://near.pro/images/logo-newsletter.png' style='display:block; width:100px; margin:30px auto;'/><h2 style='font-size:20;'>Welcome "+name+"</h2><p>Thank you for joining <br/><b>Near - Professional Networking</b></p><br/><img src='http://near.pro/images/icon-search@2x.png' width='40px'><p>Search #Events or #Groups<br/>using their Twitter #hashtag</p><img src='http://near.pro/images/icon-find@2x.png' width='40px'><p>Find the right connection<br/>using powerful filters</p>  <img src='http://near.pro/images/icon-connect@2x.png' width='40px'><p>Connect instantly through in-app<br/>messaging and meet face to face</p><img src='http://near.pro/videos/near-professional-networking-app.gif' style='display:block; width:300px; margin:50px auto; border-radius: 4px; border:1px solid #CCC'/><p>We simply aim at offering you the best networking experience<br/>before, during and after any #Event</p><p><a href='http://near.pro/pages/thank-you.html' style='color:#25B9DC;'>Share Near</a> with your contacts</p><p>Any questions or feedback, <a href='mailto:contact@near.pro?subject=About%20Near%20-%20Welcome%20Email&body=Hello%2C%20about%2...' style='color:#25B9DC;'>email us</a></p><p>The Near Team<br /><a href='http://near.pro/' style='color:#25B9DC;'>NEAR.PRO</a></p><a href='https://twitter.com/near_pro' style='display:block; width:33.3%; float:left; margin: 40px 0'><img src='http://near.pro/images/icon-twitter@2x.png' width='26px' style='margin:0 auto; display:block;'/></a><a href='https://www.facebook.com/nearproapp/' style='display:block; width:33.3%; float:left; margin: 40px 0'><img src='http://near.pro/images/icon-facebook@2x.png' width='26px' style='margin:0 auto; display:block;'/></a><a href='https://plus.google.com/+NearProapp/posts' style='display:block; width:33.3%; float:left; margin: 40px 0'><img src='http://near.pro/images/icon-google-plus@2x.png' width='26px' style='margin:0 auto; display:block;'/></a></body></html>"
  try{
	console.log(email);
		var welcomeEmail = `<html>
				<head>
					<meta charset='UTF-8'/>
				</head>
				
				<body style='max-width:600px; width:auto; font-family:-apple-system, Lato, Helvetica, Arial; font-size:16; margin:0 auto; display: block; padding:0 6px; text-align: center; background: white'>
					<center>
						<h2 style='font-size:20;'>Hi ${name},</h2>
						<p>Your email has been received! <br> We will contact you shortly, Thank you very much. Melon Team</p>
					</center>
				</body>
			</html>`;

			var data = {
		    from: from,
		    to: email,
		    subject: 'Welcome to Melon Hong Kong',
		    html : welcomeEmail
		  };

		var inquiryMail = `<html>
				<head>
					<meta charset='UTF-8'/>
				</head>
				<body style='max-width:600px; width:auto; font-family:-apple-system, Lato, Helvetica, Arial; font-size:16; margin:0 auto; display: block; padding:0 6px; text-align: center; background: white'>
					<p style="text-align:left;"><b>Email:</b> ${email} <br><b>Name:</b> ${name} <br><b>Message:</b> ${needed} <br></p>
				</body>
				<html>`;

		var toSend = ["fritz@melonhk.com","michelle@melonhk.com", "siewhoon@melonhk.com"];
		var userData = {
			from: from,
		    to: toSend,
		    subject: 'Message from Website on Melon Hong Kong',
		    html : inquiryMail
		}
		

		mailgun.messages().send(data, function(err,body){
			// cb(err,body);
			if(body){
				console.log(body);
				mailgun.messages().send(userData, function(err,body){
					cb(err,body);
				});
				// cb(err,body);
			}else{
				console.log(err);
				cb(err, null);
			}

		});

		


}catch(e){
	cb(e,null);
}
	
}
