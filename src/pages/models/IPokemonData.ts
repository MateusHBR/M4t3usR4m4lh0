export interface PokemonData {
  id: number;
  name: string;
  forms: [
    {
      name: string;
      url: string;
    },
  ];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}
