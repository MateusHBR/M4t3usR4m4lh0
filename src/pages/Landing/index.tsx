import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import { Container, Main } from './styles';
import Logo from '../../images/Logo.svg';

// Pagina principal, Landing Page
const Landing: React.FC = () => {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <Main>
          <h1>Encontre seus pokemons favoritos</h1>
        </Main>

        <Link className="pokemons" to="/home">
          Acesse a Pokedex
          <FiArrowRight />
        </Link>
      </div>
    </Container>
  );
};

export default Landing;
