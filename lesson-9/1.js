const Arr = [];

for (let i = 0; i < 10; i++) {
  const obj = {
    number: Math.round(Math.random() * 100)
  }
  Arr.push(obj);
}
const clonedArr = [...Arr];
const newArray = [];
const getNewArray = function() {
  const newArr = Arr.sort((a, b) => a.number - b.number);
  return newArr;
}

console.log(clonedArr);
console.log(getNewArray());