import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IPokemon } from "../../../interfaces/pokemon";
import { typesPokemon } from "@/utils/data/typesPokemon";

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

export const fetchPokemonListDetailsAsync = createAsyncThunk<
  IPokemon[],
  number
>(
  "pokemonList/fetchPokemonListDetails",
  async (offset: number) => await fetchPokemonListDetails(offset)
);

async function fetchSearchPokemon(input: string) {
  console.log("input:", input);
  input = input.toLowerCase();
  let dataPokemons = [];

  if (typesPokemon.includes(input)) {
    const data = await fetch(`https://pokeapi.co/api/v2/type/${input}`);
    dataPokemons = await data.json();
    dataPokemons = dataPokemons.pokemon.map(
      ({ pokemon }: { pokemon: IPokemon }) => pokemon
    );
  } else {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1400`);
    dataPokemons = await data.json();
    // await storage.setItem("@POKEMON_SEARCH", dataJson)
    dataPokemons = dataPokemons.results.filter((pokemon: IPokemon) => {
      const { name } = pokemon;
      const regex = new RegExp(input);
      return regex.test(name);
    });
  }

  // console.log("dataPokemons:", dataPokemons);

  const pokemonPromises = await dataPokemons.map(async (pokemon: IPokemon) => {
    const pokemonDetails = await fetch(pokemon.url);
    const pokemonJson = await pokemonDetails.json();
    return pokemonJson;
  });

  const pokemons = await Promise.all(pokemonPromises);
  console.log("pokemons:", pokemons);
  return pokemons;
}

export const fetchSearchPokemonAsync = createAsyncThunk<IPokemon[], string>(
  "pokemonList/fetchSearchPokemon",
  async (input: string) => await fetchSearchPokemon(input)
);
