"use client";

import { PokemonList } from "@/components/PokemonList";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <PokemonList />
    </main>
  );
}
