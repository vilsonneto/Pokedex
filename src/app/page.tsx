"use client";

import { PokemonList } from "@/components/PokemonList";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Header } from "@/components/Header";
import { SearchPokemon } from "../components/SearchPokemon/index";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Provider store={store}>
      <main className="flex flex-col items-center justify-between">
        <Header>
          <SearchPokemon />
        </Header>
        <PokemonList />
      </main>
    </Provider>
  );
}
