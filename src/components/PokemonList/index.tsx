"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonListAsync } from "@/redux/modules/pokemonList/thunk";
import { IPokemonListState } from "@/redux/modules/pokemonList/slice";
import { AppState } from "@/redux/store";
import { IPokemon } from "@/interfaces/pokemon";
import { PokemonCard } from "../PokemonCard";

export const PokemonList = () => {
  const { loading, pokemonList, error } = useSelector<
    AppState,
    IPokemonListState
  >((state) => state.pokemonList);

  const [offset, setOffset] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonListAsync(offset))
  }, [offset]);

  return (
    <div className="w-full max-w-[970px] bg-white rounded-b-lg">
      {loading && <p>Loading pokemon list...</p>}
      {pokemonList && (
        <ul className="flex flex-wrap justify-evenly p-4">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      )}
      
      <button className="" onClick={() => { setOffset(offset + 12)}}>Carregar mais</button>
    </div>
  );
};
