export interface PokemonData {
  id: number;
  name: string;
  forms: [
    {
      name: string;
      url: string;
    },
  ];
}
