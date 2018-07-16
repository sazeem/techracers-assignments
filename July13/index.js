const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/clients', (req, res) => {

	res.send(clients);

});

app.post('/api/clients', (req,res) => {	

	const course = {
				
		name: req.body.name
	};

	
});

