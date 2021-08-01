import { capitalizer, correctString } from "./string";

const topCard = {
  city: document.querySelector('#card-name'),
  temp: document.querySelector('#card-temp'),
  description: document.querySelector('#card-description'),
  minorDescription: document.querySelector('#card-minor'),
}

const bottemCard = document.querySelector('#bottem-card');

function displayWeatherSummary(weatherData) {
  topCard.city.textContent = weatherData.city;
  topCard.temp.textContent = `${
    Math.floor(weatherData.main.temp - 273.15)
  }°C`;
  topCard.description.textContent = weatherData.weather.main;
  topCard.minorDescription.textContent = 
    capitalizer(weatherData.weather.description);
}

function displayExtraWeatherInfo(weatherData) {
  while (bottemCard.firstChild) {
    bottemCard.removeChild(bottemCard.firstChild);
  }
  Object.keys(weatherData.main).forEach((key, index) => {
    if (key !== 'temp') {
      const newElement = document.createElement('p');
      if (index < 4) {
        const celsius = `${Math.floor(weatherData.main[key] - 273.15)}°C`;
        newElement.textContent = `${correctString(key)}: ${celsius}`;
      } else {
        newElement.textContent = `${correctString(key)}: ${weatherData.main[key]}`;
      }
      bottemCard.appendChild(newElement);
    }
  });
}

export { displayWeatherSummary, displayExtraWeatherInfo };