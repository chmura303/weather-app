import { getCity, getWeather } from './forecast.js';

const form = document.querySelector('#app-form');
const input = document.querySelector('#app-input');

const cityName = document.querySelector('#city-name');
const condition = document.querySelector('#city-condition');
const temperature = document.querySelector('#city-temperature');

form.addEventListener('submit', e => {
  e.preventDefault();

  let city = input.value.trim();

  getCity(city)
    .then(data => getWeather(data.Key))
    .then(data => {
      condition.textContent = data.WeatherText;

      const temp = `${data.Temperature.Metric.Value}ºC`;
      temperature.textContent = temp;
    })
    .catch(err => console.log(err));

  city = `${city[0].toUpperCase()}${city.substring(1).toLowerCase()}`;

  cityName.textContent = city;
  form.reset();
});
