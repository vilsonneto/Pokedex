"use client";

import { IAbility } from "@/src/interfaces/pokemon";
import { ajustCase } from "@/src/utils/functions/ajustCaseAbilities";

interface IPokemonCaracteristcsProps {
  abilities: IAbility[];
  height: number;
  weight: number;
}

export const PokemonCaracteristcs = ({
  abilities,
  height,
  weight,
}: IPokemonCaracteristcsProps) => {
  const cmToRealMPokemon = (cm: number) => {
    const m = cm * 10 * 0.01;
    return m.toFixed(1);
  };

  const gToRealKgPokemon = (g: number) => {
    const kg = g * 10 * 0.01;
    return kg.toFixed(1);
  };

  return (
    <div className="flex p-5 w-full bg-blue-150 rounded-md">
      <div className="w-1/2">
        <h3 className="text-base text-white">Height</h3>
        <p className="text-lg mt-3">{cmToRealMPokemon(height)}m</p>

        <h3 className="text-base text-white mt-3">Weight</h3>
        <p className="text-lg mt-3">{gToRealKgPokemon(weight)}kg</p>
      </div>

      <div className="w-1/2">
        <h3 className="text-base text-white">Abilities</h3>
        <ul>
          {abilities.map(({ability}) => (
            <li className="text-lg mt-3" key={ability.name}>
              {ajustCase(ability.name)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
