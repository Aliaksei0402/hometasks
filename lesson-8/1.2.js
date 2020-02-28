const a = Number(prompt('Vvedite min'));
const b = Number(prompt('Vvedite max'));

const getRandom = function(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandom(a, b));