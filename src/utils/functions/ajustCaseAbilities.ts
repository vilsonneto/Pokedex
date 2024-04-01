import { IAbility } from "@/src/interfaces/pokemon";
import { capitalize } from "./capitalize";

export const ajustCaseListAbilities = (abilities: IAbility[]) => {
  const newList = abilities.map(({ ability }) => {
    let newCase = String(ability.name.replace("-", " "));
    return capitalize(newCase);
  });

  return newList;
};
