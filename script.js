async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f46cbb9e63785600daed9797e8b82d7`,
      { mode: 'cors' },
      )
    const data = await response.json();
    console.log(data);
  } catch(err) {
    console.error(err);
  }
}

console.log(getWeather('amsterdam'));