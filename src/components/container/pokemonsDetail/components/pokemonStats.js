import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';
import en from '../../../../locales/en.json';

import './pokemonStats.scss';

const PokemonStats = ({ stats }) => {
  return (
    <>
      <section className="pokemon_stats">
        <h4>{en.pokemonDetail.statsHeading}</h4>
        <Row>
          {stats &&
            stats.map((st) => {
              return (
                <Col xs={12} sm={6} key={st.name}>
                  <Row>
                    <Col xs={4} sm={4} key={st.name}>
                      <label aria-label={st.name}>{st.name}</label>
                    </Col>
                    <Col xs={8} sm={8} key={st.name}>
                      <ProgressBar now={st.stat} label={`${st.stat}`} />
                    </Col>
                  </Row>
                </Col>
              );
            })}
        </Row>
      </section>
    </>
  );
};

PokemonStats.propTypes = {
  stats: PropTypes.object,
};

export default PokemonStats;
