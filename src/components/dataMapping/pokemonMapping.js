import getColorCode from '../../utils/getColorCode';
import url from '../../data/url.json';

const PokemonMapping = (pokeDetails) => {
  const { name, id, types } = pokeDetails;
  const formattedData = {
    name: name,
    id: id,
    types: getColorCode(types),
    number: id.toString().padStart(3, '0'),
    image: url.imageUrl + id + `.png`,
  };
  return formattedData;
};

export default PokemonMapping;
