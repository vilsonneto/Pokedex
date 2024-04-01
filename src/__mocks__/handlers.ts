import { http, HttpResponse } from 'msw';

const pokemonListResponse = {
  results: [
    {
      name: 'pokemon1',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'pokemon2',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
  ],
};

const pokemonDetailsResponse = {
  id: 1,
  name: 'pokemon1',
  height: 7,
  weight: 69,
  types: [
    {
      slot: 1,
      type: {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
    },
  ],
};

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon', () => {
    return HttpResponse.json(pokemonListResponse)
  }),
  http.get('https://pokeapi.co/api/v2/pokemon/1', () => {
    return HttpResponse.json(pokemonDetailsResponse);
  }),
  http.get('https://pokeapi.co/api/v2/pokemon/2', () => {
    return HttpResponse.json(pokemonDetailsResponse);
  }),
];