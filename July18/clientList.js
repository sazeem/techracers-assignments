const Request = require("request");
const express = require('express');
const app = express();
app.use(express.json());


const middleware = function(req,res,next){

var auth = req.headers['authorization'];
console.log("Authorization Header is: ", auth);

if(!auth) {              
  res.statusCode = 401;
  res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
  res.end('<html><body>Need some creds son</body></html>');
}
else if(auth) {
  var tmp = auth.split(' ');
  var buf = new Buffer(tmp[1], 'base64');
  var plain_auth = buf.toString();

  console.log("Decoded Authorization ", plain_auth);

  var creds = plain_auth.split(':');
  var username = creds[0];
  var password = creds[1];

  if((username == 'admin') && (password == 'thegibson')) {   
    next();
  }  
  
}
else {
  res.statusCode = 401;
  res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
  res.end('You shall not pass');
  }

};

app.get('/',[middleware],(req,res) => {
  
  const token = req.headers['myauth'];
  Request.get({     
    "headers": { "content-type" : "application/json", "Myauth" : token },
    "url": "https://api.createsend.com/api/v3.1/clients.json"
  },(error, response, body) => {
    if(error) {
      return console.dir(error);
    }
    const myResp = JSON.parse(body);        
    res.send(myResp);        
  });
});



const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
