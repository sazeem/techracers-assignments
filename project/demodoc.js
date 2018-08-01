const express = require('express');
const app = express();
const { Pool, Client } = require('pg')
const pool = new Pool(
	{
	  database: 'company',
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

app.get('/employees',function(req,res){
	
	pool.query("SELECT * FROM employees", (err, result) => {
	  res.send(result.rows);	  
	});
});
app.get('/projects',function(req,res){
	
	pool.query("SELECT * FROM projects", (err, result) => {
	  res.send(result.rows);	  
	});
});
app.post('/createproject',(req,res) => {
	const results = [];
	const data = {ProjectName:req.body.ProjectName, ManagerID:req.body.ManagerID, Duration:req.body.Duration, Cost:req.body.Cost};
	pool.query("INSERT INTO projects(ProjectName,ManagerID,Duration,Cost) VALUES($1,$2,$3,$4)",[data.ProjectName,data.ManagerID,data.Duration,data.Cost]);
	const query = pool.query('SELECT * FROM projects ORDER BY ProjectID ASC');
	query.on('row',(row) => {
		results.push(row);
	});
	query.on('end',() => {
		done();
		return res.json(results);
	})
});
app.get('/roles',function(req,res){
	
	pool.query("SELECT * FROM roles", (err, result) => {
	  res.send(result.rows);	  
	});
});
app.listen(3000,function(){
	console.log('Server Started on Port 3000');
});