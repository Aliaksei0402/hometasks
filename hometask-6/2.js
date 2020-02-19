const a = Number(prompt('Vvedite chislo: '));
let b = Number(0);

for (let i = 1; i <= a; i++) {
	if (a % i === 0) {
		b++;
	}
}

if (b === 2) {
	alert('chislo prostoe');
}
else {
	alert('chislo sostavnoe');
}