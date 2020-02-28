const n = Number(prompt('Vvedite chislo: '));

const isPrimeNumber = function(x) {
  let b = 0;
  for (i = 0; i <= x; i++) {
    if (x % i === 0) {
      b++;
    }
  }
  if (b === 2) {
    return 'Chislo prostoe';
  } else {
    return 'Chislo sostavnoe';
  }
}

console.log(isPrimeNumber(n));