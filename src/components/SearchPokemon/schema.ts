import z from "zod";

export const searchPokemonSchema = z.object({
    search: z.string().min(2),
});

export type TSearchPokemon = z.infer<typeof searchPokemonSchema>;