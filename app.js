var 	express = require('express'),
  		app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(8081, function() {
	var port = server.address().port;
    console.log('Heroku Server now running at http://localhost:', port);
});
