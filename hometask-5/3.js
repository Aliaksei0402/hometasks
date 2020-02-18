//3

const x = Number(prompt('Vvedite x'));
const y = Number(prompt('Vvedite y'));

if ((x % y === 0) || (y % x === 0)) {
	alert('Delitsa bez ostatka');
}
else {
	alert('Ne delitsa bez ostatka');
}