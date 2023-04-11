import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import colorCode from '../../../../data/colorsCode.json';
import PropTypes from 'prop-types';
import en from '../../../../locales/en.json';
const { pokemonInfo } = en.pokemonDetail;

import './pokemonInfo.scss';

const PokemonInfo = ({ info }) => {
  const { height, weight, gender, eggGroups, abilities, types, weak } =
    info || [];
  return (
    <>
      <section className="pokemon_info">
        <Row>
          <Col xs={6} sm={3}>
            <label>{pokemonInfo.height}</label>
            <p>{height}</p>
          </Col>
          <Col xs={6} sm={3}>
            <label>{pokemonInfo.weight}</label>
            <p>{weight}</p>
          </Col>
          <Col xs={6} sm={3}>
            <label>{pokemonInfo.gender}</label>
            <p>{gender}</p>
          </Col>
          <Col xs={6} sm={3}>
            <label>{pokemonInfo.eggGroup}</label>
            <p>{eggGroups}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={3}>
            <label>{pokemonInfo.abilities}</label>
            <p>{abilities}</p>
          </Col>
          <Col xs={6} sm={3}>
            <label>{pokemonInfo.types}</label>
            <p>
              {types &&
                types.map((type) => (
                  <span
                    key={type}
                    className="pokemon_info-type"
                    style={{ backgroundColor: colorCode[type] }}
                  >
                    {type}
                  </span>
                ))}
            </p>
          </Col>
          <Col xs={12} sm={6}>
            <label>{pokemonInfo.weakAgainst}</label>
            <p>
              {weak &&
                weak.map((w) => (
                  <span
                    key={w}
                    className="pokemon_info-weak"
                    style={{ backgroundColor: colorCode[w] }}
                  >
                    {w}
                  </span>
                ))}
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
};

PokemonInfo.propTypes = {
  info: PropTypes.object,
};

export default PokemonInfo;
