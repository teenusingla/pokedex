import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './pokemonCard.scss';
import styles from './pokemonCard.style';
const PokeCard = ({ pokemon, setPokemonDetailShow, clickEvent, hideDesc }) => {
  const { image, name, number, types, id } = pokemon || {};

  //Todo move inline to css
  return (
    <li
      className="pokemon_card"
      style={
        types && types.length === 1
          ? { backgroundColor: types[0] }
          : { background: `linear-gradient(${types})` }
      }
      onClick={() => {
        clickEvent ? setPokemonDetailShow(id) : '';
      }}
    >
      <img src={image} alt={name} />
      {!hideDesc && (
        <>
          <h4> {name}</h4> <h4> {number} </h4>
        </>
      )}
    </li>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.object,
  setPokemonDetailShow: PropTypes.func,
  clickEvent: PropTypes.bool,
  hideDesc: PropTypes.bool,
};
const PokemonCard = styled(PokeCard)`
  ${styles};
`;

export default PokemonCard;
