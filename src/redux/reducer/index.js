// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux';

// Reducers
import pokemon from './pokemon-reducer';

export default combineReducers({
  pokemon,
  // Here you can registering another reducers.
});


