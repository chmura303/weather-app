import FetchWrapper from './fetch-wrapper.js';

const API = new FetchWrapper(
  location.protocol === 'http:'
    ? 'http://dataservice.accuweather.com'
    : 'https://dataservice.accuweather.com'
);
const key = 'Eq8ZQd4SUco3KnePgk46fuq2hFM9v4Q7';

export const getCity = city => {
  return new Promise((res, rej) => {
    API.get(`/locations/v1/cities/search?apikey=${key}&q=${city}`)
      .then(data => {
        res(data[0]);
        return data[0];
      })
      .catch(err => console.log(err));
  });
};

export const getWeather = id => {
  return new Promise((res, rej) => {
    API.get(`/currentconditions/v1/${id}?apikey=${key}`)
      .then(data => {
        res(data[0]);
        return data[0];
      })
      .catch(err => console.log(err));
  });
};
