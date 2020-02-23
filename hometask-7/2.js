const d1 = new Date();
const d2 = new Date((d1.getFullYear()), (d1.getMonth()), (d1.getDate()),  23, 59, 59, 999);

const diff = d2 - d1;
console.log('Do konca dnya ostaloc: ' + Math.round(diff / 1000 / 60) + ' minut');