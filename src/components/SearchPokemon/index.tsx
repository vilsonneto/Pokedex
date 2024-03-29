"use client";

import { fetchSearchPokemonAsync } from "@/redux/modules/pokemonList/thunk";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

export const SearchPokemon = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState("");

  return (
    <form
      className="flex gap-2 h-9"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(fetchSearchPokemonAsync(value));
      }}
    >
      <input
        className="text-gray-400 p-2 rounded-md"
        placeholder="Search by name or type"
        type="text"
        id="search"
        onChange={(event) => setValue(event.target.value)}
      />
      <motion.button
        whileTap={{ scale: 0.85 }}
        className="h-9 w-9 bg-yellow rounded-md flex justify-center items-center"
        name="search"
        type="submit"
      >
        <IoSearch />
      </motion.button>
    </form>
  );
};
