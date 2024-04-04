import { IAbility } from "@/src/interfaces/pokemon";
import { capitalize } from "./capitalize";

export const ajustCase = (word: string) => {
    let newCase = String(word.replaceAll("-", " "));
    return capitalize(newCase);
};
