const N = Number(prompt('Vvedite kolichestvo ludei: '));
const names = ['Vitya', 'Alex', 'Marina', 'Dasha', 'Sveta', 'Dima', 'Sasha', 'Ilya', 'Vika', 'Oleg'];
const people = [];
const min = new Date('1980-01-01');
const max = new Date('1995-12-31');

for (let i = 0; i < N; i++) {
  const human = {
    name: names[Math.floor(Math.random() * 10)],
    dob: new Date(Math.floor(Math.random() * (max - min + 1)) + Math.floor(min)),
    salary: Number(Math.round(Math.random() * 100 * 5))
  }
  people[i] = human;
  console.log(human);
}

let maxsalary = 0;
let maxsalaryname = '';
for (let i = 0; i < people.length; i++) {
  if (people[i].salary > maxsalary) {
    maxsalary = people[i].salary;
    maxsalaryname = people[i].name;
  }
}
console.log('Maximalnaya zarplata y ' + maxsalaryname + ' : ' + maxsalary);

let today = new Date();
let sr = 0;
for (let i = 0; i < people.length; i++) {
  let z = people[i].dob;
  sr += today.getYear() - z.getYear();
}
console.log('Sredniy vozrast = ' + Math.round(sr / people.length) + ' let');