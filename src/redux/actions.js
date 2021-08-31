import {
  SET_WEATHER,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_ERROR,
  SET_BACKGROUND_IMAGE,
  SET_LOADING,
} from './types';

export const fetchWeather = (weather) => {
  return {
    type: SET_WEATHER,
    payload: {weather},
  };
};

export const addFavourite = (fav) => {
  return {
    type: ADD_FAVOURITE,
    payload: fav,
  };
};

export const removeFavourite = (favId) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: favId,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const setBackgroundImage = (img) => {
  return {
    type: SET_BACKGROUND_IMAGE,
    payload: img,
  };
};

export const setAppLoadingAction = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};
