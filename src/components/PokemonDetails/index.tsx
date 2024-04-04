"use client";

import { IPokemon } from "@/src/interfaces/pokemon";
import Image from "next/image";
import { IdPokemon } from "../IdPokemon";
import { capitalize } from "@/src/utils/functions/capitalize";
import { TagType } from "../TagType";
import { PokemonCaracteristcs } from "../PokemonCaracteristcs";
import { StatsPokemon } from "../StatsPokemon";

interface IPokemonDetailsProps {
  pokemon: IPokemon;
}

export const PokemonDetails = ({ pokemon }: IPokemonDetailsProps) => {
  const { name, stats, abilities, height, sprites, weight, types, id } =
    pokemon;
  return (
    <div className="w-full max-w-[970px] bg-white rounded-lg mt-10 p-5 text-gray-500">
      <p className="text-5xl w-full text-center mb-11 font-semibold">
        {name && capitalize(name)}{" "}
        <span className="text-gray-200">
          <IdPokemon id={id} />
        </span>
      </p>

      <div className="flex flex-wrap">
        <div className="md:w-1/2 w-full">
          <div className="bg-poke w-[270px] mx-auto md:mx-0 sm:w-[600px] md:w-[350px] xl:w-[420px]  h-[300px] sm:h-[600px] md:h-[350px] xl:h-[420px] rounded-2xl relative ">
            <Image
              fill
              priority
              src={sprites.other["official-artwork"].front_default || sprites.other["home"].front_default || "/missingno.png" }
              alt={`${name} oficial artwork image`}
              sizes="(max-width: 420px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
            <p className="text-xl mt-4 mb-2.5">Types</p>
            <div className="flex text-base mb-5">
              {types.map(({ type }) => (
                <TagType type={type.name} key={type.name} />
              ))}
            </div>
        </div>
        <div className="md:w-1/2 w-full">
            <PokemonCaracteristcs abilities={abilities} height={height} weight={weight}/>

            <StatsPokemon stats={stats}/>
        </div>
      </div>
    </div>
  );
};
