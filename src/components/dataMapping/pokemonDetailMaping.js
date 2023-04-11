import url from '../../data/url.json';
import getColorCode from '../../utils/getColorCode';

const PokemonDetailMaping = (values) => {
  const pokemon = values[0];
  const pokemonSpecies = values[1];
  const weak = values[2];
  const evolution = values[3];

  const formattedData = {
    image: url.imageUrl + pokemon.id + `.png`,
    name: pokemon.name,
    number: pokemon.id.toString().padStart(3, '0'),
    description: formatDescription(pokemonSpecies.flavor_text_entries),
    evolution: formatEvolution(evolution.chain, []),
    info: {
      eggGroups: formatEggGroup(pokemonSpecies.egg_groups),
      height: pokemon.height,
      weight: `${Math.round(pokemon.weight * 10) / 100} Kg`,
      gender: '',
      abilities: formatAbilities(Array.from(pokemon.abilities)),
      types: formatType(pokemon.types),
      typesColorCode: getColorCode(pokemon.types),
      weak: formatWeak(weak.damage_relations.double_damage_from),
    },
    stats: formatStats(pokemon.stats),
  };
  return formattedData;
};

const formatDescription = (values) => {
  const data = values.map((value) => {
    if (value.language.name == 'en') return value.flavor_text;
  });
  return [...new Set(data)].toString().replace(/[^\x20-\x7E]/gim, '');
};

const formatEggGroup = (values) => {
  let data = '';
  values.map((value, index) => {
    data += `${value.name}${values.length == index + 1 ? '' : ', '}`;
  });
  return data;
};

const formatStats = (values) => {
  const data = values.map((value) => {
    return { name: value.stat.name, stat: value.base_stat };
  });
  return data;
};

const formatAbilities = (values) => {
  let data = '';
  values.map((value, index) => {
    data += `${value.ability.name}${values.length == index + 1 ? '' : ', '}`;
  });
  return data;
};

const formatWeak = (values) => {
  return values.map((value) => value.name);
};

const formatType = (values) => {
  return values.map((value) => value.type.name);
};

const formatEvolution = (value, data) => {
  const id = value.species.url.split('/').slice(-2, -1)[0];
  const jsonData = {
    image: url.imageUrl + id + `.png`,
    name: value.species.name,
    number: id.toString().padStart(3, '0'),
  };
  data.push(jsonData);

  if (value.evolves_to.length >= 1) formatEvolution(value.evolves_to[0], data);
  return data;
};

export default PokemonDetailMaping;
