import { rootReducer } from "@/src/redux/store";
import { configureStore } from "@reduxjs/toolkit";

export const mockStore = (initialState: any) => {
  const mockStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
      preloadedState: initialState
  });
  return mockStore;
};

