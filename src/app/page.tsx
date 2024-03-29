"use client";

import { PokemonList } from "@/components/PokemonList";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Header } from "@/components/Header";
import { SearchPokemon } from "../components/SearchPokemon/index";
import { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Home() {

  return (
    <Provider store={store}>
      <main className="flex flex-col items-center justify-between">
        <Header/>
        <PokemonList />
      </main>
    </Provider>
  );
}
