import FetchWrapper from './fetch-wrapper.js';

const API = new FetchWrapper(
  location.protocol === 'http:'
    ? 'http://dataservice.accuweather.com'
    : 'https://dataservice.accuweather.com'
);

const key = '7mrOGHxhz3eBJLYvg2hngLwMsBGxyg4T';

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

// ----- async await version -----

// const API =
//   location.protocol === 'http:'
//     ? 'http://dataservice.accuweather.com'
//     : 'https://dataservice.accuweather.com';

// const key = '7mrOGHxhz3eBJLYvg2hngLwMsBGxyg4T';

// export const getCity = async city => {
//   const res = await fetch(
//     `${API}/locations/v1/cities/search?apikey=${key}&q=${city}`
//   );
//   const data = await res.json();
//   return data[0];
// };

// export const getWeather = async id => {
//   const res = await fetch(`${API}/currentconditions/v1/${id}?apikey=${key}`);
//   const data = await res.json();
//   return data[0];
// };
