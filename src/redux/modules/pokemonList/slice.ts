import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonListDetailsAsync, fetchSearchPokemonAsync } from "./thunk";
import type { IPokemon } from "../../../interfaces/pokemon";

export interface IPokemonListState {
  loading: boolean;
  pokemonList: Array<IPokemon | null>;
  error: null | string | undefined;
}

const initialState: IPokemonListState = {
  loading: false,
  pokemonList: [],
  error: null,
};

export const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    resetList: (state, action: PayloadAction<IPokemon[]>) => {
      state.pokemonList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonListDetailsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonListDetailsAsync.fulfilled, (state, action) => {
        if (action.payload[0]?.name !== state.pokemonList[0]?.name) {
          state.pokemonList.push(...action.payload);
        }
        state.loading = false;
      })
      .addCase(fetchPokemonListDetailsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : null;
      })

      builder
      .addCase(fetchSearchPokemonAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchPokemonAsync.fulfilled, (state, action) => {
        if (action.payload[0]?.name !== state.pokemonList[0]?.name) {
          state.pokemonList = action.payload;
        }
        state.loading = false;
      })
      .addCase(fetchSearchPokemonAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : null;
      });
  },
});

export const { resetList } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
