const str = prompt('Vvedite stroky: ');
const probel = [];

for (i = 0; i < str.length; i++) {
  if (str[i] === ' ') {
    probel.push(i);
  }
}
probel.push(str.length);

let max = 0;
let dlina = '';
let j = 0;

for (i = 0; i < probel.length; i++) {
  if (Math.abs(probel[i] - probel[i + 1]) > max) {
    max = Math.abs(probel[i] - probel[i + 1]);
    j = probel[i];
    dlina = str.substr(j, max);
  }
}

console.log('Samoe dlinnoe slovo: ' + dlina.trim());

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