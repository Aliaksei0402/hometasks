const a = prompt('Vvedite stroky: ');
let b = Number(0);
let c = Number(0);
let d = Number(0);

for (let i=0; i<=a.length; i++) {
	if ((a[i] == "a") || (a[i] == "e") || (a[i] == "i") || (a[i] == "o") || (a[i] == "u") || (a[i] == "y")) {
		b++;
	}
	else {
		if ((a[i] == "q") || (a[i] == "w") || (a[i] == "r") || (a[i] == "t") || (a[i] == "p") || (a[i] == "s") || (a[i] == "d") || (a[i] == "f") || (a[i] == "g") || (a[i] == "h") || (a[i] == "k") || (a[i] == "j") || (a[i] == "l") || (a[i] == "z") || (a[i] == "x") || (a[i] == "c") || (a[i] == "v") || (a[i] == "b") || (a[i] == "n") || (a[i] == "m")) {
			c++;
		}
		else {
			d++;
		}
	}
}

alert('glasnych = ' + b + ', soglasnych = ' + c + ', simvolov = ' + (d-1));