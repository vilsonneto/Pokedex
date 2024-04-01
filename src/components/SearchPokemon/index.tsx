"use client";

import { fetchSearchPokemonAsync } from "@/src/redux/modules/pokemonList/thunk";
import { AppDispatch } from "@/src/redux/store";
import { useDispatch } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { searchPokemonSchema, TSearchPokemon } from "./schema";
import { resetList } from "@/src/redux/modules/pokemonList/slice";

type TInputs = {
  search: string;
};

export const SearchPokemon = () => {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<TInputs>({
    resolver: zodResolver(searchPokemonSchema),
  });

  async function onSubmit(data: TInputs) {
    dispatch(resetList([]))
    router.push({ pathname: "/", query: { search: data.search } });
  }

  return (
    <form className="flex gap-2 h-9" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("search", { required: true })}
        className="text-gray-400 p-2 rounded-md"
        placeholder="Search by name or type"
        type="text"
        id="search"
        name="search"
        autoComplete="off"
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
