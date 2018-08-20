const Request = require("request");
const commits = require('../models/commitModel');
const commit = require('../models/commitModel');
const repos = require('../models/repoModel');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const _ = require('lodash');

exports.commitList = (req,res) => {
  commits.findAll().then(commits => {
    res.send(commits);
  });
}

exports.getCommitList = (req,res) => {
  const token = req.headers['authorization'];
  const login = req.body.userName;
  const repoName = req.body.repoName;

  commits.findAll()
   .then((commits) => requestGitHub(commits,token,login,repoName,res));
}

const requestGitHub = (commits,token,login,repoName,res) => {
  let repoList = [];
  let ownerList = [];

  _.forEach(commits,(value) => {
    repoList.push(value.dataValues.repo_name);
    ownerList.push(value.dataValues.committer);
  });

  if(!(_.includes(ownerList,login)) || !(_.includes(repoList,repoName)) || (commits.length == 0)){
    Request.get({     
      "headers": { "content-type" : "application/json", "User-Agent":login, "Authorization" : token },
      "url": "https://api.github.com/repos/"+ login +"/"+ repoName +"/commits"
    },(error, response, body) => {
      if(error) {
        return console.dir(error);
      }
      const myResponse = JSON.parse(body);  
      
      repos.findAll({
        attributes:["id"],
        where:{ name: repoName}
      })
      .then((repos) => storeCommits(repos,myResponse,repoName,res));
    });
  }
  else{
    res.send(commits);  
  }
};

const storeCommits = (repos,myResponse,repoName,res) => {                    
  let myCommits = mapper(myResponse,repos,repoName);

  commit.bulkCreate(myCommits)
   .then(() => {
      if(myCommits.length == 0){
        res.status(400).send(myResponse);
      }
      else{
        console.log("Commits Added!");
        res.status(201).send(myCommits);
      }            
   })
   .catch((err) =>{
    res.status(400).send(err);
   });
};


const mapper = (repository,repos,repoName) => {
    let newRepository = [];
    try{              
      _.forEach(repository, function(value) {
        let obj = {};
        obj.id = value.sha;
        obj.committer = value.author.login;
        obj.message = value.commit.message;
        obj.repo_id = repos[0].dataValues.id;
        obj.repo_name = repoName;
        newRepository.push(obj);
      });
    }
    catch{
      if(Object.keys(repository[0]).length > 2)
        res.status(400).send("Repository Doesn't Exist in database!");
    }
    finally{
      return newRepository;
    }
};

