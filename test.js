var http = require('http')
var net = require('net')
var url = require('url')

var proxy = http.createServer(function(req, res){
        
        console.log('requrest fired!..\n');
        console.log(JSON.stringify(req.headers) + '\n');
        console.log(req.method + '\n');
        console.log(req.url + '\n');
        console.log(req.statusCode + '\n');
        console.log(req.socket + '\n');
        
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        req.on('data', function(chunk){
                console.log(chunk);
            });
        res.end('ok');
    });
proxy.on('connect', function(){
        console.log('connect fired!.. \n');
    });

proxy.listen(8080);
