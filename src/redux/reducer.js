import {
  SET_WEATHER,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_ERROR,
  SET_BACKGROUND_IMAGE,
  SET_LOADING,
} from './types';
import Weather from '../types/weather';
import url from '../assets/earth.jpg';

const initialState = {
  cityResult: new Weather(),
  favouritesList: [],
  error: null,
  backgroundImage: url,
  isLoading: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      const weather = action.payload.weather;
      return {
        ...state,
        cityResult: weather
          ? new Weather(
              weather.name.replace('Province', ''),
              Math.round(weather.main.temp),
              weather.weather[0].description,
              weather.main.humidity,
              Math.round(weather.main.temp_min),
              Math.round(weather.main.temp_max),
              weather.timezone,
              weather.id,
              weather.backgroundImage,
            )
          : null,
      };
    }

    case ADD_FAVOURITE:
      return {
        ...state,
        favouritesList: [...state.favouritesList, action.payload],
      };
    case REMOVE_FAVOURITE:
      const filteredFavouritesList = state.favouritesList.filter(
        (fav) => fav.id !== action.payload,
      );
      return {
        ...state,
        favouritesList: filteredFavouritesList,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_BACKGROUND_IMAGE:
      return {
        ...state,
        backgroundImage: {uri: action.payload},
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
