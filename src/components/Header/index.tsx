import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../images/Logo.svg';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </Container>
  );
};

export default Header;
