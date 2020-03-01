const str = prompt('Vvedite stroky: ');
const exp = /\+1[\s\-]*[2-9]\d{2}[\s\-]*[2-9]\d{2}[\s\-]*\d{4}/g;
console.log(str);
console.log(str.match(exp));
console.log(exp.test(str));