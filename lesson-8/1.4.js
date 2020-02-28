const getColor = function(red, green, blue) {
	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);
	return r + ', ' + g + ', ' + b;
}

console.log(getColor());