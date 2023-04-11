export const SET_LOADING = 'SET_LOADING';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMONS_REQUESTED = 'GET_POKEMONS_REQUESTED';
export const GET_POKEMON_DETAIL = (pokemonId) => ({
  type: 'GET_POKEMON_DETAIL',
  pokemonId,
});
export const GET_POKEMON_DETAIL_REQUESTED = 'GET_POKEMON_DETAIL_REQUESTED';