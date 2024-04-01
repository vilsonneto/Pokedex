"use client";

import { useSelector } from "react-redux";
import { IPokemonListState } from "@/src/redux/modules/pokemonList/slice";
import { AppState } from "@/src/redux/store";
import { PokemonCard } from "../PokemonCard";

export const PokemonList = () => {
  const {  pokemonList } = useSelector<
    AppState,
    IPokemonListState
  >((state) => state.pokemonList);

  return (
    <ul className="flex flex-wrap justify-evenly gap-2 p-4">
      {pokemonList?.map(
        (pokemon) =>
          pokemon && (
            <PokemonCard key={pokemon.id + pokemon.name} pokemon={pokemon} />
          )
      )}
    </ul>
  );
};
