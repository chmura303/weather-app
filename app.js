import { getCity, getWeather } from './forecast.js';

const form = document.querySelector('#app-form');
const input = document.querySelector('#app-input');

const cityName = document.querySelector('.city.name');
const condition = document.querySelector('.city.condition');
const temperature = document.querySelector('.city.temperature');
const icon = document.querySelector('.city.icon');
const result = document.querySelector('.result');
const image = document.querySelector('.image-wrapper');

form.addEventListener('submit', e => {
  e.preventDefault();

  let city = input.value.trim();

  getCity(city)
    .then(data => {
      cityName.textContent = data.EnglishName;
      return getWeather(data.Key);
    })
    .then(data => {
      console.log(data);

      result.style.display = 'block';

      image.style.display = 'none';

      condition.textContent = data.WeatherText;

      temperature.innerHTML = `${data.Temperature.Metric.Value}<span class='celsius'>ºC</span>`;

      const num = data.WeatherIcon;
      const path = '<img src="./img/weather/icons8-';

      if (num <= 2) {
        icon.innerHTML = `${path}sun-100.png" />`;
      } else if (num === 3 || num === 4) {
        icon.innerHTML = `${path}partly-cloudy-day-100.png" />`;
      } else if (num === 5) {
        icon.innerHTML = `${path}haze-100.png" />`;
      } else if (num >= 6 && num <= 11) {
        icon.innerHTML = `${path}clouds-100.png" />`;
      } else if (num === 12 || num === 13) {
        icon.innerHTML = `${path}rain-cloud-100-2.png" />`;
      } else if (num === 14) {
        icon.innerHTML = `${path}rain-cloud-100.png" />`;
      } else if (num >= 15 && num <= 18) {
        icon.innerHTML = `${path}cloud-lightning-100.png" />`;
      } else if (num >= 19 && num <= 23) {
        icon.innerHTML = `${path}snow-100.png" />`;
      } else if (num === 24) {
        icon.innerHTML = `${path}icy-100.png" />`;
      } else if (num >= 25 && num <= 29) {
        icon.innerHTML = `${path}sleet-100.png" />`;
      } else if (num === 30) {
        icon.innerHTML = `${path}thermometer-up-100.png" />`;
      } else if (num === 31) {
        icon.innerHTML = `${path}thermometer-down-100.png" />`;
      } else if (num === 32) {
        icon.innerHTML = `${path}wind-100.png" />`;
      } else if (num === 33 || num === 34) {
        icon.innerHTML = `${path}moon-and-stars-100.png" />`;
      } else if (num === 35 || num === 36) {
        icon.innerHTML = `${path}night-100.png" />`;
      } else if (num === 37) {
        icon.innerHTML = `${path}fog-100.png" />`;
      } else if (num === 38 || num === 39) {
        icon.innerHTML = `${path}clouds-100.png" />`;
      } else if (num === 39 || num === 40) {
        icon.innerHTML = `${path}rain-cloud-100-2.png" />`;
      } else if (num === 41 || num === 42) {
        icon.innerHTML = `${path}cloud-lightning-100.png" />`;
      } else if (num >= 43) {
        icon.innerHTML = `${path}snow-100.png" />`;
      } else {
        icon.innerHTML = '';
      }
    })
    .catch(err => console.log(err));

  form.reset();
});
