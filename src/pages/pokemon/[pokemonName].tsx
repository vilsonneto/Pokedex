import { IPokemon } from "@/src/interfaces/pokemon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import "../../app/globals.css";
import { PokemonDetails } from "../../components/PokemonDetails/index";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { resetList } from "@/src/redux/modules/pokemonList/slice";

export default function DynamicPage() {
  const router = useRouter();
  const { pokemonName } = router.query;

  const dispatch = useDispatch<AppDispatch>();

  const [currentPokemon, setCurrentPokemon] = useState<IPokemon>();

  useEffect(() => {
    const fetchPokemon = async (name: string | string[] | undefined) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setCurrentPokemon(data);
    };

    dispatch(resetList([]))
    fetchPokemon(String(pokemonName).toLowerCase());
  }, [pokemonName, dispatch]);

  return (
    <main className="flex flex-col items-center justify-between">
      {currentPokemon && <PokemonDetails pokemon={currentPokemon} />}
    </main>
  );
}
