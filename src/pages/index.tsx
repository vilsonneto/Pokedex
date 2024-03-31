"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonListDetailsAsync,
  fetchSearchPokemonAsync,
} from "@/src/redux/modules/pokemonList/thunk";
import {
  IPokemonListState,
  resetList,
} from "@/src/redux/modules/pokemonList/slice";
import { AppDispatch, AppState } from "@/src/redux/store";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { PokemonNotFound } from "@/src/components/PokemonNotFound";
import { useRouter } from "next/router";
import { PokemonList } from "@/src/components/PokemonList";

export default function Home() {
  const { loading, pokemonList, error } = useSelector<
    AppState,
    IPokemonListState
  >((state) => state.pokemonList);

  const router = useRouter();

  const [offset, setOffset] = useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const { search } = router.query || {};
    if (!!search) {
      dispatch(fetchSearchPokemonAsync(String(search)));
      setOffset(0);
    } else {
      pokemonList.length % 12 !== 0 && dispatch(resetList([]));
      dispatch(fetchPokemonListDetailsAsync(offset));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, dispatch, router.query?.search]);
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full min-h-[70vh] max-w-[970px] bg-white rounded-b-lg">
        {loading && (
          <div className="min-h-[70vh] flex justify-center items-center">
            <Player
              autoplay
              speed={1.5}
              loop
              src="https://lottie.host/fbcdced8-7f93-46bf-b6ec-c4682dde5922/6xtpKZgziF.json"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
        )}
        {pokemonList.length === 0 ? (
          <PokemonNotFound pokemon={pokemonList} />
        ) : (
          <PokemonList />
        )}

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
    </main>
  );
}
