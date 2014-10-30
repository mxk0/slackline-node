// server.js

// Node.js implementation of slackline – https://github.com/ernesto-jimenez/slackline

// BASE SETUP
// ========================================================================================

// required modules
var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var http		= require('http');
var querystring = require('querystring');
var request		= require('request');

// configure the app to use bodyParser()
// this will allow us to interpret the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


// ROUTES
// ========================================================================================

var router = express.Router();

// test route to make sure everything is working
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to slackline!' });
});

// router.route('/bridge')
	
// 	.post(function(req, res){
// 		var username = req.body.user_name;
// 		var text = req.body.text;
// 		var icon_emoji = req.body.icon_emoji;
// 		var domain = req.query.domain;
// 		var token = req.query.token;

// 		if (username == "slackbot") {
// 			return
// 		} else {
// 			sendTo(username, text, icon_emoji, domain, token)
// 		};
// 	});

router.all('/bridge', function(req, res) {
	var username = req.body.user_name;
	var text = req.body.text;
	var domain = req.query.domain;
	var token = req.query.token;

	sendTo(username, text, domain, token);

	// if (username == "slackbot") {
	// 	return
	// } else {
	// 	sendTo(username, text, icon_emoji, domain, token)
	// };
});

app.use(router);


// START THE SERVER
// ========================================================================================

app.listen(port);
console.log('slackline is running on port ' + port);


// FUNCTIONS
// ========================================================================================

// Send a post request to the target Slack instance
function sendTo(username, text, domain, token) {

	var postURL = '/services/hooks/incoming-webhook?token='

	var options = {
		uri: 'https://' + domain + postURL + token,
		method: 'POST',
		json: {
			'username' : username,
			'text' : text,
			'icon_emoji' : ':ghost:'
		}
	};

	console.log(options['uri']);

	request(options, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			console.log('Success!');
		} else {
			console.log(response);
		}
	});
};
