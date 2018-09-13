class Car{
	constructor(color){
		this.color = color;
	}	
}

class Rover extends Car{
	drive(speed){
	console.log(`I'm Driving ${speed} in my ${this.color} Car`);
	}
}	

const figo = new Rover('red');

figo.drive('fast');