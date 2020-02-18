//1

const a = Number(prompt('Vvedite a'));
const b = Number(prompt('Vvedite b'));
const c = Number(prompt('Vvedite c'));
const d = Number(prompt('Vvedite d'));

if ((a > b) && (a > c) && (a > d)) {
	alert ('max = a =' + a);
}
else {
	if ((b > a) && (b > c) && (b > d)) {
		alert ('max = b =' + b);
	}
	else {
		if ((c > a) && (c > b) && (c > d)) {
			alert('max = c =' + c);
		}
		else {
			if ((d > a) && (d > b) && (d > c)) {
				alert('max = d =' + d)
			}
		}
	}
}

alert ('srednee garmonicheskoe = ' + (((a ** (-1) + b ** (-1) + c ** (-1) + d ** (-1)) / 4) ** (-1)));
