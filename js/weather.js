// 날씨와 위치
function geoSuc(pos) {
  const API_KEY = "48a7d2a5e745987942ee2c85e9946274";
  const weaIcoEl = document.createElement("img");
  const weaLocEl = document.querySelector(".weather__location");
  const weaweaEl = document.querySelector(".weather__weather");
  const weaTmpEl = document.querySelector(".weather__temp");
  const loc = pos.coords;
  const lon = loc.longitude;
  const lat = loc.latitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      weaIcoEl.src = iconUrl;
      weaIcoEl.alt = "날씨이미지";
      weaIcoEl.className = "weather__icon__img";
      document.querySelector(".weather__icon").appendChild(weaIcoEl);
      const place = data.name;
      const temp = data.main.temp;
      weaLocEl.innerText = place;
      weaweaEl.innerText = weather;
      weaTmpEl.innerText = `${temp}℃`;
    });
}
function geoFail(err) {
  console.log(err);
}

setInterval(navigator.geolocation.getCurrentPosition(geoSuc, geoFail), 60000);
