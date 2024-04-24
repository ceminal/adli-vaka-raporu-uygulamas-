import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../redux-toolkit/slices/formSlice'
// import { loadState, saveState } from "./localStorage";

const store = configureStore({
  reducer: {
    form: formReducer ,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

