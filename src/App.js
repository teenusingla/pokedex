import React from 'react';

// bring Provider from react-redux, it's the bridge for connecting react to redux
import { Provider } from 'react-redux';

// Bring the redux store too
import store from './redux/store';

// Components
import Pokemon from './components/container/pokemons/pokemon';

export const App = () => {
  return (
    // Register your redux Provider here
    <Provider store={store}>
      <Pokemon />
    </Provider>
  );
};
