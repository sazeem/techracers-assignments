var http = require('http');
var dt = require('./myfirstModule');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
   /* res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url,true).query;
    var text = q.year+" "+q.date;
    */fs.readFile('myJSTester.html',function(err,data){
    	res.writeHead(200,{'Content-Type':'text/html'});
    	res.write(data);
    	return res.end();
    });
    /*res.write("The Current Date and Time:"+ dt.myDateTime());
    res.write(req.url);
    res.end(text);*/
}).listen(8085);