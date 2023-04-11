import React from 'react';
import PropTypes from 'prop-types';
import './searchbox.scss';
import en from '../../../../locales/en.json';

const Searchbox = ({ searchInput, setSearchInput }) => {
  return (
    <>
      {
        <section className="pokemon_search">
          <label htmlFor="search">{en.searchBox.label}</label>
          <input
            value={searchInput}
            type="search"
            placeholder="Name or Number"
            aria-label="search pokemon"
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
        </section>
      }
    </>
  );
};

Searchbox.propTypes = {
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func,
};

export default Searchbox;
