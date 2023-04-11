import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import PokemonCard from '../../pokemons/components/pokemonCard';
import PokemonDescription from '../components/pokemonDescription';
import PokemonInfo from '../components/pokemonInfo';
import PokemonStats from '../components/pokemonStats';
import PokemonEvolution from '../components/pokemonEvolution';

import './pokemonModal.scss';

const PokemonModal = (props) => {
  const pokemonDetail =
    (props && props.pokemonDetail && props.pokemonDetail[0]) || [];
  const { image, info, description, stats, evolution, name, number } =
    pokemonDetail || {};

  const pokemonCard = {
    image: image,
    types: info && pokemonDetail.info.typesColorCode,
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="pokemon detail"
      centered
      className="pokemon_detail_modal"
    >
      <Modal.Header closeButton>
        <Row>
          <Col xs={12} className="pokemon_name d-block d-sm-none">
            {name}
          </Col>

          <Col xs={12} smHidden className="pokemon_no d-block d-sm-none">
            {number}
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {props.loading && '...Loading'}
            <Col xs={6} md={4}>
              <PokemonCard pokemon={pokemonCard} hideDesc></PokemonCard>
            </Col>
            <Col xs={6} md={8}>
              <PokemonDescription
                name={name}
                number={number}
                description={description}
              ></PokemonDescription>
            </Col>
          </Row>
          <Row>
            <PokemonInfo info={info}></PokemonInfo>
          </Row>
          <Row>
            <PokemonStats stats={stats}></PokemonStats>
          </Row>
          <Row>
            <PokemonEvolution evolution={evolution}></PokemonEvolution>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

PokemonModal.propTypes = {
  onHide: PropTypes.bool,
  pokemonDetail: PropTypes.array,
  loading: PropTypes.bool,
};

export default PokemonModal;
