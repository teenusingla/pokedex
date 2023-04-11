import { SET_LOADING, GET_POKEMONS, GET_POKEMON_DETAIL } from '../action/index';

// Define your state here
const initialState = {
  loading: false,
  pokemons: {},
  pokemonDetail: {},
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Set loading
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    // Get pokemons
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        loading: false,
      };

    // Get pokemons
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: payload,
        loading: false,
      };

    // Return default state if you didn't match any case
    default:
      return state;
  }
};
