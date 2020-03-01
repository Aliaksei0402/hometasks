let domain = '';
let point = 0;
const getDomain = function() {
  for (let i = 0; i < document.domain.length; i++) {
    if (document.domain[i] === '.') {
      point = i;
    }
  }
  return point;
}

console.log('Домен: ' + document.domain);
console.log('Домен 1-ого уровня: ' + document.domain.slice(getDomain(), document.domain.length));