"use client";

import { fetchSearchPokemonAsync } from "@/redux/modules/pokemonList/thunk";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { IoSearch } from "react-icons/io5";

export const SearchPokemon = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <form
      className="flex gap-2 h-9"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const value = event.target[0].value;
        console.log(value);
        dispatch(fetchSearchPokemonAsync(value));
      }}
    >
      <input
        className="text-gray-400 p-2 rounded-md"
        placeholder="Search by name or type"
        type="text"
        id="search"
      />
      <button
        className="h-9 w-9 bg-yellow rounded-md flex justify-center items-center"
        name="search"
        type="submit"
      >
        <IoSearch />
      </button>
    </form>
  );
};
