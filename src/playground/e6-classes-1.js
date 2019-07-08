class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		return `Hi my name is ${ this.name }.`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}
// -------------------------------------------------------------------------------------------------------
class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;	
	}
	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += `Their major is ${this.major}.`;
		}

		return description;
	}
}
// --------------------------------------------------------------------------------------------------
class Traveller extends Person{
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	hasHomeLocation() {
		return !!this.homeLocation;
	}

	getGreeting() {
		let greet = super.getGreeting();

		if (this.hasHomeLocation()) {
			greet += ` I'm visitting from Philippines.`
		}

		return greet;
	}




}



 const me =  new Traveller('Renz Owen', 21, 'Philippines');
 console.log(me.getGreeting());

 const other = new Traveller();
 console.log(other.getGreeting());