const currentDate = new Date();
const h2 = document.querySelector("h2");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const hours = String(currentDate.getHours()).padStart(2, "0");
const minutes = String(currentDate.getMinutes()).padStart(2, "0");
const currentTime = `${dayOfWeek} ${hours}:${minutes}`;
console.log(currentTime);
h2.innerHTML = `${currentTime}`;

const searchInput = document.getElementById("searchInput");
const submitButton = document.getElementById("submitButton");
const cityNameElement = document.getElementById("cityName");
const temperatureElement = document.getElementById("temperature");

const h1 = document.querySelector("h1");

if (searchInput.value) {
  h1.innerHTML = `${searchInput.value}`;
} else {
  h1.innerHTML = null;
}

async function fetchWeatherData(city) {
  cityNameElement.textContent = "";
  temperatureElement.textContent = "";
  const apiKey = "9ab9c8883313d4e254caf910926ea7c5";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const fetchResult = await fetch(apiUrl);
  const jsonResult = await fetchResult.json();

  const cityName = jsonResult.name;
  const temperature = Math.round(jsonResult.main.temp);
  console.log(jsonResult.main.temp);
  cityNameElement.textContent = cityName;
  temperatureElement.textContent = `${temperature}°C`;
}

submitButton.addEventListener("click", function (evt) {
  const inputValue = searchInput.value;
  fetchWeatherData(inputValue);
  console.log("called function");
  console.log(inputValue);
  evt.preventDefault();
});
