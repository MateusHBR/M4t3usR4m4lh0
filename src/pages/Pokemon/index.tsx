import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import { IPokemonParams, PokemonData } from '../models';

import Header from '../../components/Header';
import { Container, PokemonStatus } from './styles';

const Pokemon: React.FC = () => {
  const [currentPokemon, setCurrentPokemon] = useState<PokemonData>();
  const params = useParams<IPokemonParams>();

  useEffect(() => {
    api
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => {
        setCurrentPokemon(response.data);
      });
  }, [params]);
  return (
    <Container color="#000">
      <Header />

      <Link to="/home" className="backHome">
        <FiArrowLeft size={40} />
      </Link>

      <main>
        <img
          src={
            currentPokemon &&
            currentPokemon.sprites.other.dream_world.front_default
          }
          alt={currentPokemon && currentPokemon.name}
        />

        <h1>{currentPokemon && currentPokemon.name}</h1>

        <h3>
          {currentPokemon &&
            `Type: ${currentPokemon.types.map(
              (current) => current.type.name,
            )} `}
        </h3>

        <PokemonStatus>
          {currentPokemon &&
            currentPokemon.stats.map((status) => {
              return (
                <div key={status.stat.name}>
                  <p>{status.stat.name}</p>
                  <p>{status.base_stat}</p>
                </div>
              );
            })}
        </PokemonStatus>
      </main>
    </Container>
  );
};

export default Pokemon;
