var fs = require('fs');

var readFile1 = function(){
		
	return fs.readFile('file1.txt', function(err, data) {return data;});
	
};

function appendFile(result){

	fs.appendFile('file2.txt', result, function (err) {	
		if (err) throw err;		
		console.log('Content of file1 appended to file2!');	
	});
}

var readFile2 = function(){

	
	return fs.readFile('file2.txt', function(err, data) {return data;});
	

};

function writeFile(result){

	fs.writeFile('file3.txt', result, function (err) {
				
				if (err) throw err;
				console.log('Content of file2 saved to file3!');

	});
}



var promise1 = new Promise (function(resolve, reject){
		resolve('Success!');
});

promise1.then(appendFile(readFile1))
.then(writeFile(readFile2));