export interface IAbility {
  ability: {
    name: string;
  };
}

export interface IStatsPokemon {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface IPokemon {
  name: string;
  url: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    other: any;
  };
  abilities: IAbility[];
  stats: IStatsPokemon[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

export interface ISimplePokemon {
  name: string;
  url: string;
}
