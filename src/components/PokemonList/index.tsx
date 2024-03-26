"use client";

import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonListAsync,
} from "@/redux/modules/pokemonList/thunk";
import {
  IPokemonListState,
} from "@/redux/modules/pokemonList/slice";
import { AppState } from "@/redux/store";
import { IPokemon } from "@/interfaces/pokemon";

export const PokemonList = () => {
  const { loading, pokemonList, error } = useSelector<AppState, IPokemonListState>(
    (state) => state.pokemonList
    );
    const dispatch = useDispatch();
    
  useEffect(() => {
    const handleLoadPokemonList = () => {
      dispatch(fetchPokemonListAsync(0));
    };
    handleLoadPokemonList()
  }, []);

    useEffect(() => {
      console.log(pokemonList)
    }, [pokemonList]);

  return (
    <div>
      {loading && <p>Loading pokemon list...</p>}
      {pokemonList && (
        <ul>
          {pokemonList.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
