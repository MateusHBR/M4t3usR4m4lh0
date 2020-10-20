import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, GridView, ListOfTypes } from './styles';

import api from '../../services/api';

import { IPokemonType, PokemonSpecies } from '../models';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const [kantoPokemons, setKantoPokemons] = useState<PokemonSpecies[]>([]);
  // Estado de pokemons de Kanto
  const [filteredPokemonList, setFilteredPokemonList] = useState<
    PokemonSpecies[]
  >([]);
  // Estado de filtro de pokemon

  const types = [
    { id: 0, name: 'All' },
    { id: 1, name: 'fighting' },
    { id: 2, name: 'normal' },
    { id: 3, name: 'flying' },
    { id: 4, name: 'poison' },
    { id: 5, name: 'ground' },
    { id: 6, name: 'rock' },
    { id: 7, name: 'bug' },
    { id: 8, name: 'ghost' },
    { id: 9, name: 'steel' },
    { id: 10, name: 'fire' },
    { id: 11, name: 'water' },
    { id: 12, name: 'grass' },
    { id: 13, name: 'electric' },
    { id: 14, name: 'psychic' },
    { id: 15, name: 'ice' },
    { id: 16, name: 'dragon' },
    { id: 17, name: 'dark' },
    { id: 18, name: 'fairy' },
  ];
  // Aqui defino os tipos de pokemon

  function loadKantoPokemons() {
    api.get('/api/v2/pokedex/2/').then((response) => {
      setKantoPokemons(response.data.pokemon_entries);
    });
  }

  useEffect(() => {
    loadKantoPokemons();
  }, []); // Quando o componente for montado ele fará um get nos pokemons de kanto

  async function handlePokemons(id: number): Promise<void> {
    setFilteredPokemonList([]);
    if (id === 0) {
      loadKantoPokemons();
    } else {
      const pokemons: PokemonSpecies[] = kantoPokemons;
      // pego todos pokemons de kanto
      const response = await api.get(`/api/v2/type/${id}`);
      // faço uma Request no tipo de pokemon que foi informado pelo usuario

      const PokemonNamesFromCurrentType: IPokemonType = response.data;
      // Pego apenas os pokemons do tipo desejado

      const filteredPokemons: PokemonSpecies[] = [];
      // crio uma variavel que terá uma lista dos pokemons filtrados

      pokemons.forEach((pokemon) => {
        for (
          let index = 0;
          index < PokemonNamesFromCurrentType.pokemon.length;
          index += 1
        ) {
          if (
            PokemonNamesFromCurrentType.pokemon[index].pokemon.name ===
            pokemon.pokemon_species.name
          ) {
            filteredPokemons.push(pokemon);
          }
        }
      }); // atribuo a minha lista penas os pokemons daquele tipo

      if (filteredPokemons.length > 0) {
        setFilteredPokemonList(filteredPokemons);
      } else {
        const inexistentPokemon: PokemonSpecies = {
          entry_number: 0,
          pokemon_species: {
            name: 'none',
            url: 'none',
          },
        };
        setFilteredPokemonList([inexistentPokemon]);
      } // Seto o estado dos meus pokemons
    }
  }

  return (
    <Container>
      <Header />
      <ListOfTypes>
        {types.map((type) => {
          return (
            <li className={type.name} key={type.name}>
              <button type="button" onClick={() => handlePokemons(type.id)}>
                {type.name}
              </button>
            </li>
          );
        })}
      </ListOfTypes>

      <GridView>
        {filteredPokemonList.length > 0 &&
          filteredPokemonList.map((pokemon) => {
            return (
              <Link
                key={pokemon.entry_number}
                to={`/pokemon/${pokemon.entry_number}`}
              >
                <div>
                  <p>
                    {`
                  #${String(pokemon.entry_number).padStart(3, '0')} ${pokemon.pokemon_species.name
                      }
                  `}
                  </p>
                </div>
              </Link>
            );
          })}
        {filteredPokemonList.length === 0 &&
          kantoPokemons.map((pokemon) => {
            return (
              <Link
                key={pokemon.entry_number}
                to={`/pokemon/${pokemon.entry_number}`}
              >
                <div>
                  <p>
                    {`
                #${String(pokemon.entry_number).padStart(3, '0')} ${pokemon.pokemon_species.name
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
