import { capitalize } from "./capitalize";

interface IAbility { ability: { name: string; }[]; }

export const ajustCaseListAbilities = (abilities: IAbility[]) => {
  const newList = abilities.map(({ ability }) => {
    return capitalize(ability.name.replace("-", " "));
  });

  return newList;
};
