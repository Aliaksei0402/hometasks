const element = document.getElementById('result');
let i = 0;
setInterval(() => {
	i = i + 1;
	if (i % 2 === 0) {
		element.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
	} else {
		element.innerHTML = `${new Date().getHours()}  ${new Date().getMinutes()}  ${new Date().getSeconds()}`;
	}
}, 500);