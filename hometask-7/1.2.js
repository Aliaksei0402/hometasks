const str = prompt('Vvedite stroky: ');
const probel = str.split(' ');
let max = 0;
let dlina = '';

for (let i = 0; i < probel.length; i++) {
	if (probel[i].length > max) {
  	max = probel[i].length;
    dlina = probel[i];
  }
}
console.log('Samoe dlinnoe slovo: ' + dlina);

let big = 0;
let small = 0;

for (i = 0; i < str.length; i++) {
  if ((str[i] == 'E') || (str[i] == 'A') || (str[i] == 'I') || (str[i] == 'U') || (str[i] == 'O')) {
    big++;
  }
  if ((str[i] == 'e') || (str[i] == 'a') || (str[i] == 'i') || (str[i] == 'u') || (str[i] == 'o')) {
    small++;
  }
}

console.log('propisnych glasnych: ' + big);
console.log('strochnych glasnych: ' + small);
console.log('glasnych vsego: ' + (big + small));