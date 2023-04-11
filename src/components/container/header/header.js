import React from 'react';
import './header.scss';
import en from '../../../locales/en.json';

const Header = () => {
  return (
    <>
      <header>
        <h1 aria-label="pokedex">{en.aapName}</h1>
        <hr aria-label="seperator"></hr>
        <h3 aria-label="Search for any Poemon that exists on the planet">
          {en.appDesc}
        </h3>
      </header>
    </>
  );
};

export default Header;
