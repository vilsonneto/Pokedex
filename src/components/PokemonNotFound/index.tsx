"use client";

import { IPokemon } from "@/interfaces/pokemon";
import { Player } from "@lottiefiles/react-lottie-player";
import { BsArrowLeftShort } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AppDispatch, useDispatch } from "@/redux/store";
import { fetchPokemonListDetailsAsync } from "@/redux/modules/pokemonList/thunk";
import { motion } from "framer-motion";

interface IPokemonNotFoundProps {
  pokemon: IPokemon | (IPokemon | null)[];
}

export const PokemonNotFound = ({ pokemon }: IPokemonNotFoundProps) => {
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    setTimeout(() => setLoad(true), 1000);
  }, []);

  return (
    <>
      {!!pokemon && load && (
        <div className="min-h-[70vh] flex flex-col justify-center items-center">
          <Player
            autoplay
            speed={1}
            loop
            src="https://lottie.host/1a939a97-18f1-4f9c-919a-67d3d5a53c42/cdxbvqDmYU.json"
            style={{ height: "200px", width: "200px" }}
          />
          <p className="">Pokémon Not Found</p>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="flex items-center mt-7 px-7 py-4 bg-red rounded-full text-white m-5"
            onClick={() => {
              dispatch(fetchPokemonListDetailsAsync(0))
            }}
          >
            <BsArrowLeftShort className="text-2xl mr-1" /> Return to home
          </motion.button>
        </div>
      )}
    </>
  );
};
