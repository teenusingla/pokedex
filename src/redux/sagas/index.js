import { spawn } from 'redux-saga/effects';

// Sagas
import pokemons from './pokemons-saga';

// Export the root saga
export default function* rootSaga() {
  yield spawn(pokemons);
}
