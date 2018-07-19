const Request = require("request");
const express = require('express');
const app = express();
app.use(express.json());

const middleware = function(req,res,next){

  const auth = req.headers['authorization'];  

  if(!auth) {              
    res.status(401).send("Need Proper Credentials!");    
  }
  else if(auth) {
    const tmp = auth.split(' ');
    const buf = Buffer.from(tmp[1], 'base64');
    const plain_auth = buf.toString();
    const creds = plain_auth.split(':');
    const username = creds[0];
    const password = creds[1];

    if((username == 'admin') && (password == 'campaignm')) {         
      next();
    }
    else {
      res.status(401).send("Invalid Credentials!");    
    }
  }  
};

app.get('/',[middleware],(req,res) => {

  const token = req.headers['campaign'];    

  Request.get({     
    "headers": { "content-type" : "application/json", "Authorization" : token },
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
