class App {
  constructor(elem) {
    this.elem = elem;
    this.map = null;
    this.myMap = null;
    this.stations = [];
    this.lines = [];
    this.sumDistance = 0;
  }

  async start() {
    const data = (await axios.get("coords.json")).data;
    this.stations = data;
    // console.log(this.stations);
    // console.log(this.map);

    ymaps.ready(() => this.initMap());
  }

  initMap() {
    this.map = new ymaps.Map("map", {
      center: [47.85341, 2.3488],
      zoom: 5,
    });

    this.stations.forEach((item) => {
      const point = new ymaps.Placemark([item.latitude, item.longitude], {
        balloonContent: `<p>Остановка: ${item.name} </p>
        <p>Время простоя: ${item.pause / 60} минут</p>`,
      });
      this.map.geoObjects.add(point);
    });

    this.stations.forEach((item) => {
      this.lines.push([item.latitude, item.longitude]);
    });

    const lines = new ymaps.Polyline(this.lines, {
      balloonContent: "Ломаная линия",
    });
    this.map.geoObjects.add(lines);

    this.getFullTime();
  }

  getFullDistance() {
    for (let i = 0; i < this.lines.length - 1; i++) {
      this.sumDistance += this.getDistance(this.lines[i], this.lines[i + 1]);
    }

    return this.sumDistance;
  }

  getDistance(arrA, arrB) {
    const EARTH_RADIUS = 6372795;
    let lat1 = (arrA[0] * Math.PI) / 180;
    let lat2 = (arrB[0] * Math.PI) / 180;
    let long1 = (arrA[1] * Math.PI) / 180;
    let long2 = (arrB[1] * Math.PI) / 180;

    // косинусы и синусы широт и разницы долгот
    let cl1 = Math.cos(lat1);
    let cl2 = Math.cos(lat2);
    let sl1 = Math.sin(lat1);
    let sl2 = Math.sin(lat2);
    let delta = long2 - long1;
    let cdelta = Math.cos(delta);
    let sdelta = Math.sin(delta);

    // вычисления длины большого круга
    let y =
      ((cl2 * sdelta) ** 2 + (cl1 * sl2 - sl1 * cl2 * cdelta) ** 2) ** (1 / 2);
    let x = sl1 * sl2 + cl1 * cl2 * cdelta;

    //
    let ad = Math.atan2(y, x);
    let dist = ad * EARTH_RADIUS;

    return dist / 1000;
  }

  getFullTime() {
    const input = document.getElementById("speed");
    const button = document.getElementById("button");
    let sumTimePause = 0;
    this.stations.forEach((item) => (sumTimePause += item.pause));
    let fullDistance = this.getFullDistance();
    button.addEventListener("click", function () {
      const time = document.getElementById("time");
      let speed = input.value;
      let fullTime = Math.ceil(
        fullDistance / Number(speed) + sumTimePause / 60 / 60
      );
      if (fullTime / 24 > 1 && fullTime % 24 != 0) {
        time.innerText = `Маршрут будет преодолен примерно за ${Math.floor(
          fullTime / 24
        )} дней и ${fullTime % 24} часов`;
      } else if (fullTime / 24 > 1 && fullTime % 24 === 0) {
        time.innerText = `Маршрут будет преодолен примерно за ${Math.floor(
          fullTime / 24
        )} дней`;
      } else {
        time.innerText = `Маршрут будет преодолен примерно за ${fullTime} часов`;
      }
    });
  }
}

const app = new App(document.getElementById("app"));
app.start();
