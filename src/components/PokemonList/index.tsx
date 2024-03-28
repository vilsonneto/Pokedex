"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonListDetailsAsync, fetchSearchPokemonAsync } from "@/redux/modules/pokemonList/thunk";
import { IPokemonListState } from "@/redux/modules/pokemonList/slice";
import { AppState } from "@/redux/store";
import { IPokemon } from "@/interfaces/pokemon";
import { PokemonCard } from "../PokemonCard";
import { motion } from "framer-motion";

export const PokemonList = () => {
  const { loading, pokemonList, error } = useSelector<
    AppState,
    IPokemonListState
  >((state) => state.pokemonList);

  const [offset, setOffset] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchSearchPokemonAsync("wee"));
    if(true) {
    } else {
      dispatch(fetchPokemonListDetailsAsync(offset));
    }
  }, [offset]);

  return (
    <div className="w-full max-w-[970px] bg-white rounded-b-lg">
      {loading && <p>Loading pokemon list...</p>}
      {pokemonList && (
        <ul className="flex flex-wrap justify-evenly gap-2 p-4">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      )}
      
      <div className=" w-full flex justify-center">
        <motion.button
          whileTap={{ scale: 0.85 }}
          className="px-7 py-4 bg-blue-500 rounded-full text-white m-5"
          onClick={() => {
            setOffset(offset + 12);
          }}
        >
          Carregar mais
        </motion.button>

        
        <button
          className="px-7 py-4 bg-blue-500 rounded-full text-white m-5"
          onClick={() => {
            dispatch(fetchSearchPokemonAsync("weedle"));
          }}
        >
          Fetch Search
        </button>
      </div>
    </div>
  );
};
