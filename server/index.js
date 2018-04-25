// server.js
var express    = require('express');       
var app        = express();                
var bodyParser = require('body-parser');
var request = require("request");
const cors = require('cors');

const API_URL = 'https://api.spotify.com/v1';
const API_URL_AUTHORIZE = 'https://accounts.spotify.com/authorize/';
const SPOTIFY_CLIENT_ID = '1a13de40757f4defa6c91a7936f1cbfd';
const SPOTIFY_CLIENT_SECRET = 'b6145b717a9f46a5a8928449181651c8';
const CALLBACK_AUTHORIZE = 'http://127.0.0.1:8080/authorized';
const GET_TOKEN_URL = 'https://accounts.spotify.com/api/token'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

var port = process.env.PORT || 8000;      

var router = express.Router();             

app.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to spotify api!' });   
});

app.get('/search', function(req, res) {

	request({
	  uri: 'https://api.spotify.com/v1/search?q='+req.query.q+'&type=track',
	  method: "GET",
	  headers: { Authorization: req.headers.authorization },
	}, function(error, response, body) {
		if(error)
			res.json(error)
		else
			res.json(body)
	});

});

app.post('/getAccessToken', function(req, res) {

	request({
	  uri: GET_TOKEN_URL,
	  method: "POST",
	  headers: {Authorization: 'Basic '+new Buffer(SPOTIFY_CLIENT_ID+':'+SPOTIFY_CLIENT_SECRET).toString('base64'),'Content-Type': 'application/json'},
	  form: { grant_type: 'client_credentials' },
	  json: true
	}, function(error, response, body) {
		
		if(error)
			res.json(error)
		else
			res.json(body)
	});
});



// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

