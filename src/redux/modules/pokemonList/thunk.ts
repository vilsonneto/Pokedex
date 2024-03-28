import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IPokemon } from "../../../interfaces/pokemon"

async function fetchPokemonListDetails(offset: number) {
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

export const fetchPokemonListDetailsAsync = createAsyncThunk<IPokemon[], number>(
  "pokemonList/fetchPokemonListDetails",
  async (offset: number) => await fetchPokemonListDetails(offset)
);


async function fetchSearchPokemon(input: string) {
  let dataJson = JSON.parse(localStorage.getItem("@POKEMON_SEARCH")) || [];
  if (!!dataJson) {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon`
    );
    dataJson = await data.json()
    await storage.setItem("@POKEMON_SEARCH", dataJson)
  }

  let filteredPokemon = dataJson.results.filter((pokemon) => {
    const { name } = pokemon;
    return name.toLowerCase().indexOf(input)
  })

  if (filteredPokemon.length === 0) {
    const data = await fetch(
      `https://pokeapi.co/api/v2/type/${input}`
    );
    dataJson = await data.json()

    filteredPokemon = dataJson;
    console.log(filteredPokemon)
  }

  const pokemonPromises = await dataJson.results.map(
    async (pokemon: IPokemon) => {
      const pokemonDetails = await fetch(pokemon.url);
      const pokemonJson = await pokemonDetails.json();

      return pokemonJson;
    }
  );
  
  const pokemons = await Promise.all(pokemonPromises);
  return pokemons;
}

export const fetchSearchPokemonAsync = createAsyncThunk<IPokemon[], string>(
  "pokemonList/fetchSearchPokemon",
  async (input: string) => await fetchSearchPokemonList(input)
);