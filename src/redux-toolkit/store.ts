import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './slices/formSlice';
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    form: formReducer,
  },

  preloadedState: {
    form: preloadedState,
  }
});

store.subscribe(() => {
  saveState(store.getState().form);
});

export type RootState = ReturnType<typeof store.getState>;
export default store;