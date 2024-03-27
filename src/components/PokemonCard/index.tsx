"use client";

import { IPokemon } from "@/interfaces/pokemon";
import Image from "next/image";
import { IdPokemon } from "../IdPokemon";
import { capitalize } from "@/utils/functions/capitalize";
import { TagType } from "../TagType";
import { motion } from "framer-motion";

interface IPokemonCard {
  pokemon: IPokemon;
}

export const PokemonCard = ({ pokemon }: IPokemonCard) => {
  const { sprites, name, types, id } = pokemon;

  const randomX = Math.random() < 0.5 ? -50 : 50
  const randomY = Math.random() < 0.5 ? -50 : 50

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      initial={{
        opacity: 0,
        x: randomX,
        y: randomY
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        }
      }}
      viewport={{ once: true }}
    >
      <li className="w-52 mb-5">
        <div className="bg-poke w-auto rounded-2xl cursor-pointer">
          <Image
            src={sprites.other["official-artwork"].front_default}
            alt={`${name} oficial artwork image`}
            width={200}
            height={200}
          />
        </div>
        <p className="text-sm text-gray-100 mb-4">
          <IdPokemon id={id} />
        </p>
        <h3 className="text-lg font-bold text-gray-400 mb-1">
          {capitalize(name)}
        </h3>
        <div className="flex">
          {types.map(({ type }) => (
            <TagType type={type.name} key={type.name} />
          ))}
        </div>
      </li>
    </motion.div>
  );
};
