//2

const e = Number(prompt('Vvedite 1-y dliny storony treygolnika'));
const f = Number(prompt('Vvedite 2-y dliny storony treygolnika'));
const j = Number(prompt('Vvedite 3-y dliny storony treygolnika'));

if ((e + f) > j && (e + j) > f && (f + j) > e) {
	alert('Treygolnik vozmozen');
}
else {
	alert('Treygolnik nevozmozen');
}