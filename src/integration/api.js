import {store} from '../redux/store';
import {fetchWeather, setError} from '../redux/actions';

export const getWeather = async cityName => {
  const Weather_Api_Key = 'ed89f6fe37812395b00cb5cf80fe3c64';
  const Backgground_Api_Key = '12850123-55b420bcd406fed05dfbc8049';
  const Timezone_Api_Key = '0013b1e080c7b9e1fd8496c988b105e0';

  const backgroundImage = await fetch(
    `https://pixabay.com/api/?key=${Backgground_Api_Key}&q=${cityName}&image_type=photo`,
  )
    .then(response => response.json())
    .then(data => {
      let randomPhotoNumber = Math.floor(Math.random() * 10);
      if (data.hits.length < 1) {
        return 'https://i.pinimg.com/originals/e8/90/56/e890560514c0863787a5aeabdf9dd3b4.jpg';
      } else if (data.hits.length === 1) {
        return data.hits[0].largeImageURL;
      } else {
        if (randomPhotoNumber >= data.hits.length) {
          return data.hits[data.hits.length - 1].largeImageURL;
        } else {
          return data.hits[randomPhotoNumber].largeImageURL;
        }
      }
    });

  const timezone = await fetch(
    `http://api.weatherstack.com/current?access_key=${Timezone_Api_Key}&query=${cityName}`,
  )
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        store.dispatch(setError('city not found'));
      } else {
        return data.location.timezone_id;
      }
    });

  const weatherDetails = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${Weather_Api_Key}`,
  )
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        store.dispatch(setError(data.message));
        return '';
      } else {
        return {...data, backgroundImage, timezone};
      }
    });

  store.dispatch(fetchWeather(weatherDetails));
};
