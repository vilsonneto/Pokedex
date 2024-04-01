import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pokemonListSlice from "./modules/pokemonList/slice";

export const rootReducer = combineReducers({ pokemonList: pokemonListSlice });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;