import { IAbility } from "@/interfaces/pokemon";
import { capitalize } from "./capitalize";

export const ajustCaseListAbilities = (abilities: IAbility[]) => {
  const newList = abilities.map(({ ability }) => {
    return capitalize(ability.name.replace("-", " "));
  });

  return newList;
};
