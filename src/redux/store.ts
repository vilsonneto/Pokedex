import { configureStore, combineReducers } from '@reduxjs/toolkit';

// também adicionamos o thunk
import thunk from '@reduxjs/toolkit/dist/redux-thunk'

// Combine reducers first
const rootReducer = combineReducers({});

// Now configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

