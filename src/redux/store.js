import {createStore} from 'redux';
import weatherReducer from './reducer';

export let store = createStore(weatherReducer);
