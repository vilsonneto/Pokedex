"use client";

import { IPokemon } from "@/interfaces/pokemon";
import Image from "next/image";
import { IdPokemon } from "../IdPokemon";
import { capitalize } from "@/utils/functions/capitalize";
import { TagType } from "../TagType";
import { PokemonCaracteristcs } from "../PokemonCaracteristcs";

interface IPokemonDetailsProps {
  pokemon: IPokemon;
}

export const PokemonDetails = ({ pokemon }: IPokemonDetailsProps) => {
  const { name, stats, abilities, height, sprites, weight, types, id } =
    pokemon;
  return (
    <div className="w-full max-w-[970px] bg-white rounded-lg mt-10 p-5 text-gray-500">
      <p className="text-5xl w-full text-center mb-11 font-semibold">
        {capitalize(name)}{" "}
        <span className="text-gray-200">
          <IdPokemon id={id} />
        </span>
      </p>

      <div className="flex flex-wrap">
        <div className="md:w-1/2 w-full">
          <div className="bg-poke w-[420px] rounded-2xl ">
            <Image
              src={sprites.other["official-artwork"].front_default}
              alt={`${name} oficial artwork image`}
              width={420}
              height={420}
            />
          </div>
          
            <p className="text-xl mt-4 mb-2.5">Types</p>
            <div className="flex text-base">
              {types.map(({ type }) => (
                <TagType type={type.name} key={type.name} />
              ))}
            </div>
        </div>
        <div className="md:w-1/2 w-full">
            <PokemonCaracteristcs abilities={abilities} height={height} weight={weight}/>
        </div>
      </div>
    </div>
  );
};
