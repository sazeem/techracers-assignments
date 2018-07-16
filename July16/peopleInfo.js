var Request = require("request");




Request.get({
    "headers": { "content-type": "application/json", "Authorization":"Basic YWIzMDczNDYxMTY5YmU0ODJjNGJlYzY0OGMzYzJlMjc6" },
    "url": "https://api.createsend.com/api/v3.2/clients/fd23317bd9f2be9f4d1911a6b9c4f7c1/people.json"
  
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
 