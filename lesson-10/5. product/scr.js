const list = document.getElementById('result');
const names = ['Alex', 'Ivan', 'Denis', 'Dima', 'Ilya'];
const cities = ['Moscow', 'Minsk', 'Vitebsk', 'Grodno', 'Mogilev'];
const products = ['Apple Watch', 'Samsung Galaxy', 'Apple Iphone'];
const body = document.getElementById('body');

body.setAttribute('style', 'height: 95%; display: flex; justify-content: flex-end; align-items: flex-end;')
list.setAttribute('style', 'border: 1px solid black');

setInterval(() => {
	list.innerText = `${names[Math.round(Math.random() * (names.length-1))]} из г. ${cities[Math.round(Math.random() * (cities.length-1))]} 
	купил ${Math.round(Math.random() * 4 + 1)} шт. товара ${products[Math.round(Math.random() * (products.length-1))]}`;
	setTimeout(() => {
		list.innerText = ``;
	}, 4000);
}, 5000);