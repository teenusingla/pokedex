import axios from './index';
import PokemonMapping from '../../components/dataMapping/pokemonMapping';

// Get All pokemons
export const getPokemonsApi = async () => {
  try {
    const pokemonsData = await axios.get('pokemon?offset=0&limit=60');
    const pokemons = pokemonsData.data.results;
    const pokemonList = [];
    await Promise.all(
      pokemons.map(async function (pokemon) {
        const pokeDetails = await axios.get(`pokemon/${pokemon.name}`);
        const formattedData = await PokemonMapping(pokeDetails.data);
        pokemonList.push(formattedData);
      })
    );
    //sort pokemon list
    pokemonList.sort((a, b) => (a.id > b.id ? 1 : -1));
    return pokemonList;
  } catch (err) {
    return console.error(err);
  }
};
