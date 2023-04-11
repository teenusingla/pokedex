import axios from './index';
import PokemonDetailMaping from '../../components/dataMapping/pokemonDetailMaping';

//Todo remove hardcoding, doing ony for ui purpose

export const getPokemonDetailApi = async (pokemonId) => {
  console.log('pokemonId ', pokemonId);
  try {
    const pokemonDetail = [];
    await Promise.all([
      axios.get(`pokemon/${pokemonId}`),
      axios.get(`pokemon-species/${pokemonId}`),
      axios.get(`type/${pokemonId}`),
    ])
      .then(async function (values) {
        return values.map((value) => value.data);
      })
      .then(async function (data) {
        const evolutionUrl =
          data[1].evolution_chain.url.split('/evolution-chain/');

        const evolutionData = await axios.get(
          `evolution-chain/${evolutionUrl[1]}`
        );
        data.push(evolutionData.data);
        return await PokemonDetailMaping(data);
      })
      .then(function (data) {
        pokemonDetail.push(data);
      });
    return pokemonDetail;
  } catch (err) {
    return console.error(err);
  }
};
