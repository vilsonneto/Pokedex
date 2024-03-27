export interface IPokemon {
    name: string;
    url: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
      other: any
    };
    abilities: {
      ability: {
        name: string;
      }[];
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
  }