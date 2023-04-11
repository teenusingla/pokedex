import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from '../components/pokemonCard';
import './pokemonList.scss';

const PokemonList = ({ pokemons, setPokemonDetailShow }) => {
  return (
    <>
      {pokemons &&
        Array.from(pokemons).map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              setPokemonDetailShow={setPokemonDetailShow}
              clickEvent={true}
            />
          );
        })}
    </>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.object,
  setPokemonDetailShow: PropTypes.func,
};

export default PokemonList;
