import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pokemonListSlice from "./modules/pokemonList/slice";

export const rootReducer = combineReducers({ pokemonList: pokemonListSlice });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
