const user = {
	name: 'Renz',
	cities: ['Manila', 'Cebue', 'Bago'],
	printPlacesLived() {

		return this.cities.map((city) => 
			this.name + ' has lived in '+ city);
	}
};
console.log(user.printPlacesLived());

const multiplier = {
	numbers: [1, 2, 3],
	multiplyBy: 2,
	multiply() {

		return this.numbers.map((num) => num * this.multiplyBy); 
	}

};

console.log(multiplier.multiply());