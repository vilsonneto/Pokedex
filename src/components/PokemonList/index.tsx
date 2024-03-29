"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonListDetailsAsync,
} from "@/redux/modules/pokemonList/thunk";
import { IPokemonListState } from "@/redux/modules/pokemonList/slice";
import { AppDispatch, AppState } from "@/redux/store";
import { PokemonCard } from "../PokemonCard";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { PokemonNotFound } from "../PokemonNotFound";

export const PokemonList = () => {
  const { loading, pokemonList, error } = useSelector<
    AppState,
    IPokemonListState
  >((state) => state.pokemonList);

  const [offset, setOffset] = useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPokemonListDetailsAsync(offset));
  }, [offset, dispatch]);

  return (
    <div className="w-full min-h-[70vh] max-w-[970px] bg-white rounded-b-lg">
      {loading ? (
        <div className="min-h-[70vh] flex justify-center items-center"  >
        <Player
        autoplay
        speed={1.5}
        loop
        src="https://lottie.host/fbcdced8-7f93-46bf-b6ec-c4682dde5922/6xtpKZgziF.json"
        style={{ height: "200px", width: "200px" }}
        />
        </div>
      ) : pokemonList.length === 0 ? (<PokemonNotFound pokemon={pokemonList}/>)
        : (
          <ul className="flex flex-wrap justify-evenly gap-2 p-4">
            {pokemonList?.map(
              (pokemon) =>
                pokemon && <PokemonCard key={pokemon?.id} pokemon={pokemon} />
            )}
          </ul>
        )
      }

        {pokemonList[9]?.id === 10 && (
      <div className=" w-full flex justify-center">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="px-7 py-4 bg-blue-500 rounded-full text-white m-5"
            onClick={() => {
              setOffset(offset + 12);
            }}
          >
            Load more
          </motion.button>
      </div>
        )}
    </div>
  );
};
