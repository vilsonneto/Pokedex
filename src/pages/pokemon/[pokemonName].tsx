import { useEffect, useState } from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";

import "../../app/globals.css";
import { PokemonDetails } from "../../components/PokemonDetails/index";
import { ISimplePokemon } from "../../interfaces/pokemon";
import { ajustCase } from "@/src/utils/functions/ajustCaseAbilities";

export default function Pokemon({
  pokemon,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{ajustCase(pokemon.name)} | Pokedex</title>
      </Head>
      <main className="flex flex-col items-center justify-between">
        <PokemonDetails pokemon={pokemon} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=3000");
  if (!res.ok) {
    throw new Error(`Error fetching data: ${res.status} - ${res.statusText}`);
  }

  const data = await res.json();

  if (!Array.isArray(data.results)) {
    throw new Error(
      `Expected an array of Pokemon, but received something else.`
    );
  }

  const pokemons = data.results as ISimplePokemon[];

  const paths = pokemons.map((pokemon) => ({
    params: { pokemonName: pokemon.name },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({
  params,
}: {
  params: { pokemonName: string };
}) => {
  const pokemonName = params.pokemonName as string;

  const ajustCasePokemon = String(pokemonName).toLowerCase();
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${ajustCasePokemon}`
  );
  const data = await response.json();

  return { props: { pokemon: data } };
};
