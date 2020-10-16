import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, GridView } from './styles';

import api from '../../services/api';

import Logo from '../../images/Logo.svg';

import { PokemonSpecies, PokemonData } from '../models';

const Pokemons: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

  async function fetchKantoPokemons() {
    const { data } = await api.get('/api/v2/pokedex/2/');
    const kantoPokemons: PokemonSpecies[] = data.pokemon_entries;

    const pokemonsData: PokemonData[] = [];

    kantoPokemons.map(async ({ entry_number }) => {
      const { data } = await api.get(`/api/v2/pokemon/${entry_number}`);
      const pokemon: PokemonData = data;

      pokemonsData.push(pokemon);
    });

    console.log(pokemonsData);
    setPokemonList(pokemonsData);
  }

  useEffect(() => {
    fetchKantoPokemons();
  }, []);

  return (
    <Container>
      <Header>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </Header>

      <GridView>
        {pokemonList.map(async (pokemon) => {
          return (
            <div key={pokemon.id}>
              <p>{pokemon.name}</p>
            </div>
          );
        })}
      </GridView>
    </Container>
  );
};

export default Pokemons;

// if (pokemonList.length === 0) {
//   api.get('/api/v2/pokedex/2/').then((response) => {
//     const kantoPokemons: PokemonSpecies[] = response.data.pokemon_entries;

//     kantoPokemons.map((kantoPokemon) =>
//       api
//         .get(`/api/v2/pokemon/${kantoPokemon.entry_number}`)
//         .then((pokeResponse) => {
//           const pokemons: PokemonData[] = pokeResponse.data;
//           setListSize(pokemons.length);
//           setPokemonList(pokemons);
//         }),
//     );
//   });
// }
