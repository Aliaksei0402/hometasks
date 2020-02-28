const getSum = function() {
	let s = 0;
	for (let i = 0; i < arguments.length; i++) {
		s += arguments[i];
	}
	return s;
}
console.log(getSum(5, 20, -30, 50));
console.log(getSum(5, 20, -30));