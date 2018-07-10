var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return it's content:
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  fs.appendFile('demofile1.html', '<p> Hello content! </p>', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
}).listen(8080);
