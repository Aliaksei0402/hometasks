const element = document.getElementById('result');

element.setAttribute('border', '1');

const country = [{
    name: 'Belarus',
    sq: 207595,
    population: 9.5,
    language: 'Belarussian',
    phone: '+375',
    flag: 'BLR.png'
  },
  {
    name: 'Russia',
    sq: 17125191,
    population: 146.7,
    language: 'Russian',
    phone: '+7',
    flag: 'RUS.png'
  },
  {
    name: 'USA',
    sq: 9522057,
    population: 322.7,
    language: 'English',
    phone: '+1',
    flag: 'USA.png'
  }
];

element.innerHTML = `<tr><td>Страна</td><td>Площадь (км2)</td><td>Население (млн)</td><td>Язык</td><td>Код телефона</td><td>Флаг</td></tr>`;

country.forEach((item) => {
  element.insertAdjacentHTML('beforeend', `<tr>
		<td>${item.name}</td>
		<td>${item.sq}</td>
		<td>${item.population}</td>
		<td>${item.language}</td>
		<td>${item.phone}</td>
		<td><img src="${item.flag}" alt="flag"></td>
		</tr>`)
});