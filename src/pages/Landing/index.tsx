import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Main } from './styles';
import Logo from '../../images/Logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo" />

        <Main>
          <h1>Encontre seus pokemons favoritos</h1>
        </Main>

        <Link to="/pokemons">Acesse a Pokedex</Link>
      </div>
    </Container>
  );
};

export default Landing;
