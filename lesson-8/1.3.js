const getDistance = function(point1, point2) {
	return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
}

console.log(getDistance({x: 10, y: 20}, {x: 20, y: -20}));