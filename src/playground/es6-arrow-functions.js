// const square = function (x) {
// 	return x*x;
// }
// console.log(square(8));

// const squareArrow = (x) => {
// 	return x*x;
// }

// console.log(squareArrow(7));
const getFirstName = (fullName) => {
	return fullName.split(' ')[0];
}

console.log(getFirstName('Renz Owen'));

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Jan Romeo'));