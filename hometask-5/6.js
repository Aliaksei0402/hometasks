//6

const year = Number(prompt('Vvedite god'));

if ((year % 4 === 0) && !(year % 100 === 0)) {
	alert('God visokosny');
}
else {
	if (year % 400 === 0) {
		alert('God visokosny');
	}
	else {
		alert('God ne vysokosny');
	}
}