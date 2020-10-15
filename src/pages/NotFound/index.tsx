import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import TeamRocket from '../../images/Team_Rocket.svg';

const NotFound: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>404</h1>
        <img src={TeamRocket} alt="Equipe Rocket" />
      </div>

      <p>Equipe rocket ganhou dessa vez</p>

      <Link to="/">Acesse a Pokedex</Link>
    </Container>
  );
};

export default NotFound;
