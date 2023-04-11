import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from '../../pokemons/components/pokemonCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import en from '../../../../locales/en.json';
import './pokemonEvolution.scss';

const PokemonEvolution = ({ evolution }) => {
  const lastElementNumber = evolution && evolution[evolution.length - 1].number;
  return (
    <>
      <section className="pokemon_evolution">
        <h3>{en.pokemonDetail.evolutionHeading}</h3>
        <Row>
          {evolution &&
            Array.from(evolution).map((evol) => {
              return (
                <Col
                  sm={4}
                  xs={4}
                  key={evol.name}
                  className="pokemon_evolution-col"
                >
                  <PokemonCard pokemon={evol} hideDesc></PokemonCard>
                  {lastElementNumber != evol.number && (
                    <span className="right_arrow">&#8594;</span>
                  )}
                </Col>
              );
            })}
        </Row>
      </section>
    </>
  );
};

PokemonEvolution.propTypes = {
  evolution: PropTypes.array,
};

export default PokemonEvolution;
