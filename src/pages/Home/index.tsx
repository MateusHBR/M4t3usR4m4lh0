import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, GridView } from './styles';

import api from '../../services/api';

import { PokemonSpecies } from '../models';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const [kantoPokemons, setKantoPokemons] = useState<PokemonSpecies[]>([]);

  useEffect(() => {
    api.get('/api/v2/pokedex/2/').then((response) => {
      setKantoPokemons(response.data.pokemon_entries);
    });
  }, []);

  return (
    <Container>
      <Header />

      <GridView>
        {kantoPokemons.map((pokemon) => {
          return (
            <Link
              key={pokemon.entry_number}
              to={`/pokemon/${pokemon.entry_number}`}
            >
              <div>
                <p>
                  {`
                #${String(pokemon.entry_number).padStart(3, '0')} ${
                    pokemon.pokemon_species.name
                  }
                `}
                </p>
              </div>
            </Link>
          );
        })}
      </GridView>
    </Container>
  );
};

export default Home;
