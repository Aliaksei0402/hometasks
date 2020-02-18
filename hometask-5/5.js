//5

const m = Number(prompt('Vvedite m'));
const n = Number(prompt('Vvedite n'));
const b = Number(prompt('Vvedite c'));

if ((m + n) > b && (m + b) > n && (n + b) > m) {
	alert('S = ' + ((((m + n + b) / 2) * (((m + n + b) / 2) - m) * (((m + n + b) / 2) - n) * (((m + n + b) / 2) - b)) ** (1 / 2)));
} 
else {
	alert('Treygolnik nevozmozen');
}