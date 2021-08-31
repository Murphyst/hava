import {store} from '../../redux/store';
import {setAppLoadingAction} from '../../redux/actions';

export const setAppLoading = (val) => store.dispatch(setAppLoadingAction(val));
export const camelize = (str) => {
  return str
    ?.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
