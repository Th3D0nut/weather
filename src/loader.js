import { getKey } from './api_keys.js';

async function getWeather(city) {
  try {
    const response = await fetch(
      getKey(city),
      { mode: 'cors' },
      )
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  }
}
async function retrieveUsefulWeather(city) {
  try {
    const data = await getWeather(city)
    return {
      main: data.main,
      city: data.name,
      weather: data.weather[0],
      wind: data.wind,
    }
  } catch (err) {
    console.log(err);
  }
}

export { getWeather, retrieveUsefulWeather }