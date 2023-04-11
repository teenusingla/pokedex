import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// bring connect from react-redux, it's the bridge for connecting component to redux
import { connect } from 'react-redux';

// bring the actions, just bring that have REQUESTED in the suffix
// If you dispatching that doesn't have REQUESTED, it will not work
import { GET_POKEMONS_REQUESTED } from '../../../redux/action/index';
import FilterData from '../../../utils/filterData';
import PokemonList from './components/pokemonList';
import Header from '../header/header';
import List from '../../atoms/List/index';
import Searchbox from './components/searchbox';
import './pokemon.scss';

import PokemonDetail from '../pokemonsDetail/pokemonDetails';

const Pokemon = ({
  pokemon: { pokemons, pokemonDetail, loading },
  getPokemons,
}) => {
  useEffect(() => {
    getPokemons();
  }, []);

  const [searchInput, setSearchInput] = useState('');
  const [pokemonDetailShow, setPokemonDetailShow] = React.useState(false);

  let newPokemonsList = pokemons;
  if (searchInput.length > 2)
    newPokemonsList = FilterData(searchInput, pokemons);

  return (
    <>
      {pokemonDetailShow && (
        <PokemonDetail
          pokemonDetail={pokemonDetail}
          loading={loading}
          pokemonDetailShow={pokemonDetailShow}
          setPokemonDetailShow={() => {
            setPokemonDetailShow(false);
          }}
        />
      )}

      <main>
        <Header></Header>
        {loading && 'Loading...'}
        {
          <Searchbox
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          ></Searchbox>
        }
        {
          <List className={'pokemon_list'}>
            <PokemonList
              pokemons={newPokemonsList}
              setPokemonDetailShow={setPokemonDetailShow}
            ></PokemonList>
          </List>
        }
      </main>
    </>
  );
};

Pokemon.propTypes = {
  loading: PropTypes.bool,
  pokemon: PropTypes.object,
  pokemons: PropTypes.array,
  getPokemons: PropTypes.func.isRequired,
};

// Get state to props
const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
  getPokemons: () => dispatch({ type: GET_POKEMONS_REQUESTED }),
});

// To make those two function works register it using connect
export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
