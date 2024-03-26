import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IPokemon } from "../../../interfaces/pokemon"

async function fetchPokemonList(offset: number) {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
  );
  const pokemonPromises = (await data.json()).results.map(
    async (pokemon: IPokemon) => {
      const pokemonDetails = await fetch(pokemon.url);
      const pokemonJson = await pokemonDetails.json();

      return pokemonJson;
    }
  );
  const pokemons = await Promise.all(pokemonPromises);
  return pokemons;
}

export const fetchPokemonListAsync = createAsyncThunk<IPokemon[], number>(
  "pokemonList/fetchPokemonList",
  async (offset: number) => await fetchPokemonList(offset)
);
