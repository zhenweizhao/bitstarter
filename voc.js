var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());
app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response) {
	console.log("dynamic content");
	var buffer = fs.readFileSync('voc_1.html').toString();
	response.send(buffer);
});

app.get("/wordlists/:letter", function(request, response){
	var wordlist = fs.readFileSync(request.params.letter+".txt").toString();
	response.send(wordlist);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  	console.log("Listening on " + port);
});
