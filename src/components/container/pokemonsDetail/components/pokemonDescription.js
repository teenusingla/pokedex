import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import en from '../../../../locales/en.json';
import './pokemonDescription.scss';
import { Col, Row } from 'react-bootstrap';

const PokemonDescription = ({ description, name, number }) => {
  const popover = (
    <Popover>
      <Popover.Body className="pokemon_description-popover">
        {description}
      </Popover.Body>
    </Popover>
  );

  return (
    <section className="pokemon_description">
      <Row className="pokemon_description-overview">
        <Col sm={4} xsHidden className="pokemon_description-overview-name">
          {name}
        </Col>
        <Col sm={4} xsHidden className="pokemon_description-overview-no">
          {number}
        </Col>
        <Col sm={4}></Col>
      </Row>
      <p>{description}</p>

      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={popover}
        rootClose
      >
        <a>{en.pokemonDetail.readMore}</a>
      </OverlayTrigger>
    </section>
  );
};

PokemonDescription.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default PokemonDescription;
