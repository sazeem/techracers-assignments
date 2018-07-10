var a = 5;



function fact(num){

	if(num < 1){

		return 1;
	}

	else{
		
		console.log(num);
		return num*fact(num-1);

	}


}

console.log(fact(a));