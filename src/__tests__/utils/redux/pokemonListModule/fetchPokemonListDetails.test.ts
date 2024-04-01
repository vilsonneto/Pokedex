import { fetchPokemonListDetails } from "@/src/redux/modules/pokemonList/thunk";
import { setupServer } from 'msw/node';
import { handlers } from '../../../../__mocks__/handlers';



describe('fetchPokemonListDetails', () => {
  it('should fetch a list of pokemon details', async () => {
    const pokemons = await fetchPokemonListDetails(0);

    expect(pokemons.length).toBe(2);
    expect(pokemons[0].name).toBe('pokemon1');
    expect(pokemons[0].id).toBe(1);
    expect(pokemons[0].height).toBe(7);
    expect(pokemons[0].weight).toBe(69);
    expect(pokemons[0].types[0].type.name).toBe('fire');
  });
});