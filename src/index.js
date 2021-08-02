import { retrieveUsefulWeather } from './loader.js';
import { displayWeatherSummary, displayExtraWeatherInfo } from './dom.js';

const submitCity = document.querySelector('#submit-city');
let weatherData;

async function retrieveWeather(city) {
  const data = await retrieveUsefulWeather(city);
  return data;
}

submitCity.addEventListener('click', async (e) => {
  weatherData = await retrieveWeather(e.target.previousElementSibling.value);
  console.log(weatherData);
  displayWeatherSummary(weatherData);
  displayExtraWeatherInfo(weatherData);
});

window.addEventListener('load', async function() {
  weatherData = await retrieveWeather('amsterdam');
  displayWeatherSummary(weatherData);
  displayExtraWeatherInfo(weatherData);
});