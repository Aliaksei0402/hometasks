const flats = [];
for (let i = 0; i < 4; i++) {
  const flat = {
    number: i + 1,
    rooms: Math.round((Math.random() * 3) + 1),
    tenants: Math.round((Math.random() * 5) + 1),
    sq: Math.round((Math.random() * 50) + 50),
    floor: 1,
    getPaymentSummer: function() {
      return Math.round(this.sq * this.tenants / 2);
    },
    getPaymentWinter: function() {
      return Math.round(1.8 * this.sq * this.tenants / 2);
    }
  }
  flats.push(flat);
}

for (let i = 4; i < 8; i++) {
  const flat = {
    number: i + 1,
    rooms: Math.round((Math.random() * 3) + 1),
    tenants: Math.round((Math.random() * 5) + 1),
    sq: Math.round((Math.random() * 50) + 50),
    floor: 2,
    getPaymentSummer: function() {
      return Math.round(this.sq * this.tenants / 2);
    },
    getPaymentWinter: function() {
      return Math.round(1.8 * this.sq * this.tenants / 2);
    }
  }
  flats.push(flat);
}

const Dom = {
  address: 'ul.Yakuba Kolosa, 54',
  year: 1978,
  floors: 2,
  flat: [...flats],
  getSumSq: function() {
    let s = 0;
    for (let i = 0; i < this.flat.length; i++) {
      s += this.flat[i].sq;
    }
    return s;
  },
  getSumTenants: function() {
    let s = 0;
    for (let i = 0; i < this.flat.length; i++) {
      s += this.flat[i].tenants;
    }
    return s;
  },
  getDensityPopulation: function() {
    return (this.getSumSq() / this.getSumTenants()).toFixed(2);
  },
  getFullPaymentSummer: function() {
    let s = 0;
    for (let i = 0; i < this.flat.length; i++) {
      s += this.flat[i].getPaymentSummer();
    }
    return s;
  },
  getFullPaymentWinter: function() {
    let s = 0;
    for (let i = 0; i < this.flat.length; i++) {
      s += this.flat[i].getPaymentWinter();
    }
    return s;
  }
}

console.log(Dom);
console.log('Суммарная жилая площадь дома = ' + Dom.getSumSq() + ' м2');
console.log('Население дома = ' + Dom.getSumTenants() + ' человек');
console.log('Плотность населения дома = ' + Dom.getDensityPopulation() + ' м2/человека');
console.log('С Апреля по Октябрь дом платит в месяц ' + Dom.getFullPaymentSummer() + ' руб. С Ноября по Март дом платит в месяц ' + Dom.getFullPaymentWinter() + ' руб. За год дом платит ' + (Dom.getFullPaymentSummer() * 7 + Dom.getFullPaymentWinter() * 5) + ' руб.');