const cron = require('node-cron');
const express = require('express');
const fs = require('fs');
let nodemailer = require("nodemailer");

app = express();

// create mail transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sazeem@grepruby.com",
    pass: "Helloworld5"
  }
});

// sending emails at periodic intervals
cron.schedule("* * * * *", function(){
  console.log("---------------------");
  console.log("Running Cron Job");
  let mailOptions = {
    from: "sazeem@grepruby.com",
    to: "azeempsyed@gmail.com",
    subject: `Cron is So Cool!`,
    text: `Cron is cool!`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email successfully sent!");
    }
  });
});

app.listen(3100);

/*let shell = require("shelljs");
    const express = require("express");

    app = express();

    // To backup a database
    cron.schedule("59 23 * * *", function() {
      console.log("---------------------");
      console.log("Running Cron Job");
      if (shell.exec("sqlite3 database.sqlite  .dump > data_dump.sql").code !== 0) {
        shell.exit(1);
      }
      else{
        shell.echo("Database backup complete");
      }
    });*/

/*    const fs = require("fs");

    app = express();

    // schedule tasks to be run on the server
    cron.schedule("* * 21 * *", function() {
      console.log("---------------------");
      console.log("Running Cron Job");
      fs.unlink("./error.log", err => {
        if (err) throw err;
        console.log("Error file succesfully deleted");
      });
    });
*/    
/*
     * * * * * *
     | | | | | |
     | | | | | day of week
     | | | | month
     | | | day of month
     | | hour
     | minute
     second ( optional )*/

/*   cron.schedule("* * * * *", function() {
      console.log("running a task every minute");
    });
*/     