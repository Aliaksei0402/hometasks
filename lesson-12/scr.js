const humans = [
{
	fio: 'Zenchenko Darya Sergeevna',
	position: 'waitress',
	firstday: '1989-01-01',
	salary: 300
},
{
	fio: 'Abramenko Dmitry Olegovich',
	position: 'dishwasher',
	firstday: '2010-01-01',
	salary: 250
},
{
	fio: 'Papeka Aliaksei Yurevich',
	position: 'manager',
	firstday: '1980-01-01',
	salary: 500
},
{
	fio: 'Kot Marina Aliaksandrovna',
	position: 'director',
	firstday: '2001-01-01',
	salary: 750
}
];

// Извлечение сотрудников из массива

const tbody = document.querySelector('tbody');
const form = document.querySelector('form');

const render = function (items) {
	tbody.innerHTML = '';
	tbody.insertAdjacentHTML('afterbegin', '<tr><td>ФИО</td><td>Должность</td><td>Первый рабочий день</td><td>Зарплата</td></tr>');
	for (let i = 0; i < items.length; i++) {
		tbody.insertAdjacentHTML('beforeend', 
			`<tr list-tr=${i}>
			<td>${items[i].fio}</td>
			<td>${items[i].position}</td>
			<td>${items[i].firstday}</td>
			<td>${items[i].salary}</td>
			<td><button btn="delete" data-index=${i}>x</button></td>
			</tr>`);
	}

	tbody.addEventListener('click', function(e) {
		if(e.target.hasAttribute('btn')) {
			const index = Number(e.target.getAttribute('data-index'));
			items.splice(index, 1); // не работает
			e.target.parentNode.parentNode.remove();
		}
		// console.log(humans);
	})
}
render(humans);

// Создание формы

let m = 0;

form.addEventListener('click', function(e) {
	e.preventDefault();
	if(e.target.getAttribute('id') == 'button') {
		
		if (m % 2 === 0) {
			form.insertAdjacentHTML('beforeend',
				`<label>ФИО: <input id="fio" type="text" name="fio"></label>
				<label>Должность: <input id="position" type="text" name="position"></label>
				<label>Первый рабочий день: <input id="firstday" type="text" name="firstday"></label>
				<label>Зарплата: <input id="salary" type="text" name="salary"></label>
				<input type="submit" value="Добавить">`);
			m++;
		} else {
			form.innerHTML = `<button id="button">Добавить сотрудника</button>`;
			m--;
		}
	}	
})

// Добавление сотрудника

form.addEventListener('click', function (e) {
	const fio = document.getElementById('fio');
	const position = document.getElementById('position');
	const firstday = document.getElementById('firstday');
	const salary = document.getElementById('salary');
	if(e.target.hasAttribute('value')) {
		let N = tbody.children.length - 1;
		e.preventDefault();
		tbody.insertAdjacentHTML('beforeend', 
			`<tr list-tr=${N}>
			<td>${fio.value}</td>
			<td>${position.value}</td>
			<td>${firstday.value}</td>
			<td>${salary.value}</td>
			<td><button btn="delete" data-index=${N}>x</button></td>
			</tr>`);
		humans.push({
			fio: fio.value,
			position: position.value,
			firstday: firstday.value,
			salary: Number(salary.value)
		})
		// console.log(humans);
		N++;
	}
})

// сортировка

const price = document.getElementById('price');
const timeworking = document.getElementById('timeworking');
let n = 0;

price.addEventListener('click', function() {
	if(n % 2 === 0) {
		const sortedItems = [...humans].sort((a, b) => a.salary - b.salary);
		render(sortedItems);
		n++;
	} else {
		const sortedItems = [...humans].sort((a, b) => b.salary - a.salary);
		render(sortedItems);
		n--;
	}
})

let v = 0;

timeworking.addEventListener('click', function() {
	if(v % 2 === 0) {
		const sortedItems = [...humans].sort(function(a, b) {let dateA = new Date(a.firstday), dateB = new Date(b.firstday)
			return dateA - dateB});
		render(sortedItems);
		v++;
	} else {
		const sortedItems = [...humans].sort(function(a, b) {let dateA = new Date(a.firstday), dateB = new Date(b.firstday)
			return dateB - dateA});
		render(sortedItems);
		v--;
	}
})