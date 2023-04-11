import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// bring connect from react-redux, it's the bridge for connecting component to redux
import { connect } from 'react-redux';

import { GET_POKEMON_DETAIL_REQUESTED } from '../../../redux/action/index';

import PokemonModal from './components/pokemonModal';
let pokemonId = '';

const PokemonDetail = ({
  pokemonDetailShow,
  setPokemonDetailShow,
  pokemonDetail,
  loading,
  getPokemonDetail,
}) => {
  pokemonId = pokemonDetailShow !== false ? pokemonDetailShow : '';
  useEffect(() => {
    getPokemonDetail();
  }, []);
  return (
    <>
      <PokemonModal
        loading={loading}
        show={pokemonDetailShow}
        onHide={setPokemonDetailShow}
        pokemonDetail={pokemonDetail}
      />
    </>
  );
};

PokemonDetail.propTypes = {
  pokemonDetailShow: PropTypes.bool,
  setPokemonDetailShow: PropTypes.func,
  pokemonDetail: PropTypes.array,
  loading: PropTypes.bool,
  getPokemonDetail: PropTypes.func,
};

// Get state to props
const mapStateToProps = (state) => ({
  pokemonData: state.pokemonData,
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
  getPokemonDetail: () =>
    dispatch({ type: GET_POKEMON_DETAIL_REQUESTED, pokemonId }),
});

// To make those two function works register it using connect
export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
