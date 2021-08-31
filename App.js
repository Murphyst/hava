import 'react-native-gesture-handler';
import React from 'react';
import Main from './src/layout/Main';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
