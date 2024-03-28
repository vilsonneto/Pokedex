import { IPokemon } from "@/interfaces/pokemon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import "../../app/globals.css";
import { Header } from "@/components/Header";
import { PokemonDetails } from '../../components/PokemonDetails/index';

export default function DynamicPage() {
  const router = useRouter();
  const { pokemonName } = router.query;

  const [currentPokemon, setCurrentPokemon] = useState<IPokemon>();

  useEffect(() => {
    const fetchPokemon = async (name: string | string[] | undefined) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setCurrentPokemon(data);
    };

    fetchPokemon(String(pokemonName).toLowerCase());
  }, [pokemonName]);

  return (
    <>
      <Header>{""}</Header>
      <main className="flex flex-col items-center justify-between">
        {
            currentPokemon && (
                <PokemonDetails pokemon={currentPokemon}/>
            )
        }
      </main>
    </>
  );
}
