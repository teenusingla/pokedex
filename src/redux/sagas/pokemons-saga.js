// Import the redux-saga/effects
import { put, call, takeEvery } from 'redux-saga/effects';

import {
  SET_LOADING,
  GET_POKEMONS,
  GET_POKEMONS_REQUESTED,
  GET_POKEMON_DETAIL,
  GET_POKEMON_DETAIL_REQUESTED,
} from '../action/index';

// Import all api's
import { getPokemonsApi } from '../apis/getPokemonsApi';
import { getPokemonDetailApi } from '../apis/getPokemonDetailApi';

// Here's the unique part, generator function*, function with asterisk(*)

// Get pokemons
function* getPokemons() {
  yield put({ type: SET_LOADING });

  const pokemons = yield call(getPokemonsApi);

  yield put({ type: GET_POKEMONS, payload: pokemons });
}

// Get pokemons
function* getPokemonDetail(action) {
  yield put({ type: SET_LOADING });

  const pokemonDetail = yield call(getPokemonDetailApi, action.pokemonId);

  yield put({ type: GET_POKEMON_DETAIL, payload: pokemonDetail });
}

// Export the saga (pokemon-saga)
export default function* pokemons() {
  yield takeEvery(GET_POKEMONS_REQUESTED, getPokemons);
  yield takeEvery(GET_POKEMON_DETAIL_REQUESTED, getPokemonDetail);
}
