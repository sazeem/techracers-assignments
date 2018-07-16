var Request = require("request");




Request.get({
    "headers": { "content-type": "application/json", "Authorization":"Basic YWIzMDczNDYxMTY5YmU0ODJjNGJlYzY0OGMzYzJlMjc6" },
    "url": "https://api.createsend.com/api/v3.1/clients.json"
  
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    const myResp = JSON.parse(body);
    console.log();
    console.log("-----");    
    console.log();
    console.log(myResp);
    console.log();
    console.log("-----");

    // console.dir(JSON.parse(body));
});
