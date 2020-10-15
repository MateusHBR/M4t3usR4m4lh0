import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';
import TeamRocket from '../../images/Team_Rocket.svg';

const NotFound: React.FC = () => {
  return (
    <Container>
      <div>
        <div>
          <h1>404</h1>
          <img src={TeamRocket} alt="Equipe Rocket" />
        </div>

        <p>Equipe rocket ganhou dessa vez</p>

        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
