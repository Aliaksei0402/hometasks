// console.time("FirstWay");

function getCoordsByDesktop() {
  return new Promise(function (resolve, reject) {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };
        resolve(coords);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

function getXhr(path) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText);
      resolve(data);
    };
    xhr.onerror = (err) => reject(err);
    xhr.send(null);
  });
}

function haversineDistance(lon1, lat1, lon2, lat2) {
  function toRad(x) {
    return (x * Math.PI) / 180;
  }

  let R = 6371; // km

  let x1 = lat2 - lat1;
  let dLat = toRad(x1);
  let x2 = lon2 - lon1;
  let dLon = toRad(x2);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;

  return d;
}

async function initApp() {
  const coordsByDesktop = await getCoordsByDesktop();
  const coordsByAPI = await getXhr("https://freegeoip.app/json/");
  const distance = haversineDistance(
    coordsByDesktop.longitude,
    coordsByDesktop.latitude,
    coordsByAPI.longitude,
    coordsByAPI.latitude
  );

  const tbody = document.getElementById("tbody");

  tbody.insertAdjacentHTML(
    "beforeend",
    `<tr>
      <td>Desktop</td>
      <td>${coordsByDesktop.latitude}</td>
      <td>${coordsByDesktop.longitude}</td>
    </tr>`
  );

  tbody.insertAdjacentHTML(
    "beforeend",
    `<tr>
      <td>API</td>
      <td>${coordsByAPI.latitude}</td>
      <td>${coordsByAPI.longitude}</td>
    </tr>`
  );

  tbody.insertAdjacentHTML(
    "beforeend",
    `<tr>
      <td>Расстояние между точками</td>
      <td>${distance}</td>
      <td>km</td>
    </tr>`
  );

  const citiesAround = await getXhr(
    `https://www.metaweather.com/api/location/search/?lattlong=${coordsByAPI.latitude},${coordsByAPI.longitude}`
  );

  const weather = document.getElementById("weather");

  let infoCities = [];
  for (let i = 1; i < 6; i++) {
    const city = await getXhr(
      `https://www.metaweather.com/api/location/${citiesAround[i].woeid}`
    );
    infoCities.push(city);
  }

  for (let i = 0; i < infoCities.length; i++) {
    weather.insertAdjacentHTML(
      "beforeend",
      `<tr>
        <td>${infoCities[i].title}</td>
        <td>${infoCities[i].consolidated_weather[i].weather_state_name}</td>
        <td>${infoCities[i].consolidated_weather[i].max_temp.toFixed(2)}</td>
        <td>${infoCities[i].consolidated_weather[i].min_temp.toFixed(2)}</td>
        <td>${infoCities[i].consolidated_weather[i].wind_speed.toFixed(2)}</td>
      </tr>`
    );
  }
  // console.timeEnd("FirstWay");
}
initApp();
