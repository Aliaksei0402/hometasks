const a = Number(prompt('Vvedite seconds: '));

if ((a < 60)  && (a >= 0)) {
	alert(a + ' seconds = ' + a + ' seconds');
}
else {
	if ((a < 3600) && (a >= 60)) {
		alert(a + ' seconds = ' + Math.floor(a / 60) + ' minutes ' + (a - (Math.floor(a / 60)) * 60) + ' seconds');
	}
	else {
		if ((a < 86400)  && (a >= 3600)) {
			alert(a + ' seconds = ' + Math.floor(a / 3600) + ' hours ' + (Math.floor(((a - (Math.floor(a / 3600) * 3600)) / 60))) + ' minutes ' + (a - (Math.floor(a / 60)) * 60) + ' seconds');
		}
		else {
			alert('Vvedite drugoe chislo!');
		}
	}
}