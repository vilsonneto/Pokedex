import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonListAsync } from "./thunk";
import type { IPokemon } from "../../../interfaces/pokemon"

export interface IPokemonListState  {
  loading: boolean;
  pokemonList: Array<IPokemon | null>;
  error: null | string | undefined;
}

const initialState: IPokemonListState  = {
  loading: false,
  pokemonList: [],
  error: null,
};

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    addPokemons: (state, action: PayloadAction<IPokemon[]>) => {
      state.pokemonList = [...state.pokemonList, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonListAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonListAsync.fulfilled, (state, action) => {
        state.pokemonList = action.payload;
        state.loading = false;
      })
      .addCase(fetchPokemonListAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : null;
      })
  },
});

export const { addPokemons } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
