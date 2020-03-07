const list = document.getElementById('result');
const Arr = [];
const N = Number(prompt('Vvedite chislo: '));

for (let i = 1; i <= N; i++) {
	Arr.push(i);
}

list.setAttribute('border', '1');

for (let i = 1; i <= N; i++) {
	const tr = document.createElement('tr');
	list.appendChild(tr);
	for (let j = 1; j <= N; j++) {
		const td = document.createElement('td');
		tr.appendChild(td);
		td.innerText = `${i} * ${j} = ${i * j}`;
	}
}