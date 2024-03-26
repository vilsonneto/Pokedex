'use client'

import { PokemonList } from "@/components/PokemonList";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flexflex-col items-center justify-between">
        <Header></Header>
        <PokemonList />
      </main>
    </Provider>
  );
}
