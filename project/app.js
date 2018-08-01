var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cons = require('consolidate'),
  dust = require('dustjs-helpers'),
  pg = require('pg'),
  app = express();

const { Pool, Client } = require('pg')

app.engine('dust',cons.dust);
app.set('view engine','dust');
app.set('views',__dirname + '/views');

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const pool = new Pool(
  {
    database: 'recipebookdb',
    user: 'postgres',
    password: 'groot',
    port: 5432,
    ssl: true,
    max: 20, 
    min: 4, 
    idleTimeoutMillis: 1000,
    connectionTimeoutMillis: 1000
  }
);

app.get('/',function(req,res){
  pool.connect(function(err,done){
    if(err){
      return console.error('error fetching client from pool',err);
    }
    pool.query('SELECT * FROM recipes',function(err,result){
      if(err){
        return console.error('error running query',err);
      }
      res.render('index',{recipes:result.rows});
           
    });
  });
});

app.listen(3002,function(){
  console.log('Server Started on Port 3002');
});