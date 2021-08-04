function showCityAndTemp(response) {
  let myTemp = Math.round(response.data.main.temp - 273);
  let myCity = response.data.name;
  let showResult = document.querySelector("#my-city-temp");
  showResult.innerHTML = `You are at ${myCity} and temputure is: ${myTemp}°C`;
}

function showLocation(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = `53647c12f67effb0b2c13aa8c1aa18af`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  axios.get(apiUrl).then(showCityAndTemp);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

let loactionButton = document.querySelector("#location-btn");
loactionButton.addEventListener("click", getCurrentPosition);
