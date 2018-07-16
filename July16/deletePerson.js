var Request = require("request");
const express = require('express');
const app = express();

app.use(express.json());

app.get('/:email', (req,res) => {

   

   const email = req.params.email;
    
   Request.delete({
    "headers": { "content-type": "application/json", "Authorization":"Basic YWIzMDczNDYxMTY5YmU0ODJjNGJlYzY0OGMzYzJlMjc6" },
    "url": "https://api.createsend.com/api/v3.2/clients/fd23317bd9f2be9f4d1911a6b9c4f7c1/people.json/?email=" + email
  
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }    
    else
        res.send("Deleted the person with email id: "+email);
    // console.dir(JSON.parse(body));
});

});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
