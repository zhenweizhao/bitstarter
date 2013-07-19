express = require('express');
app = express();

app.get("/*", function(req, res){
	
	console.log(req.headers);
	res.send('ok');
});

app.listen(8080);
console.log("Listening on port 8080");