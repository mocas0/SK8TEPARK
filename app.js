var express = require('express'),
    app = express(),
    request = require("request"),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));



app.get('/', function(req, res){
  res.render('index');
});



app.get('/search', function (req, res) {
	var city = req.query.city;

   var url = "https://api.foursquare.com/v2/venues/explore?client_id=4NXTOZG1TDNPTKMERKOW2EZAIBSI3YOBJ3C5LCK5PUYIAG4N&client_secret=WVO02DAUPI4OE2E4GHXFITNACNI0HFMRCN5EX42VMZUTK4KS&v=20130815&near=" + city + "&query=skate+parks";
	console.log("This is the URL " + url);
	request(url, function (err, resp, body) {
		console.log("request working");
		console.log(body);
		if(!err && resp.statusCode === 200) {
			console.log("Response is coming back");
			var jsonData = JSON.parse(body);
			console.log(jsonData);
			res.render("site/results", {data: jsonData.response.groups[0].items});
		}
	})
});


app.get('/search', function (req, res) {
	var city = req.query.city;


   var url = "https://api.foursquare.com/v2/venues/explore?client_id=4NXTOZG1TDNPTKMERKOW2EZAIBSI3YOBJ3C5LCK5PUYIAG4N&client_secret=WVO02DAUPI4OE2E4GHXFITNACNI0HFMRCN5EX42VMZUTK4KS&v=20130815&near=" + city + "&query=skate+parks";
	console.log("This is the URL " + url);
	request(url, function (err, resp, body) {
		console.log("request working");
		console.log(body);
		if(!err && resp.statusCode === 200) {
			console.log("Response is coming back");
			var jsonData = JSON.parse(body);
			console.log(jsonData);
			res.render("site/results", {data: jsonData.response.groups[0].items});
		}
	})
});




	


app.listen(process.env.PORT || 3000, function () {
  console.log("SERVER RUNNING");
});