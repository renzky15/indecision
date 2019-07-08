var nameVar = 'Renz';
var nameVar ='Mike';
console.log('nameVar', nameVar);


let nameLet = 'Jan';
nameLet = 'JanRey';
console.log('nameLet', nameLet);


const nameConst = 'Grant';
console.log('nameConst', nameConst);

// block scoping

const fullName = 'Renz Owen';
let firstName;

if (fullName) {
	// statement
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}
console.log(firstName);