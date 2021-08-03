function showTemp(response) {
  console.log(response);
  console.log(response.data.list[0].name);
  let inputCity = document.querySelector("#input-city");
  inputCity.innerHTML = `${response.data.list[0].name}`;
  let tempture = response.data.list[0].main.temp;
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `current temp:${tempture}`;
}

function searchCity(event) {
  event.preventDefault();
  let chooseCity = document.querySelector("#search");

  let apiKey = `f9ecda2c689aa064746066d544f0c32b`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${chooseCity.value}&appid=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(showTemp);
}

let showCity = document.querySelector("form");
showCity.addEventListener("submit", searchCity);
