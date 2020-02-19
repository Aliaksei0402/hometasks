const a = prompt('Vvedite chislo: ');
let b = Number(0);
let c = Number(0);

for (let i = 0; i<=a.length; i++) {
	if (a[i] == "(" ) {
   b++;
 }
 if (a[i] == ")" ) {
   c++;
 }
}

if (b>c) {
	alert('Ne hvataet ' + (b-c) + ' zakryvaushie skobki');
}
else {
  if (c>b) {
    alert('Ne hvataet ' + (c-b) + ' otkryvaushie skobki');
  }
  else {
    alert('vse pravilno');
  }
}