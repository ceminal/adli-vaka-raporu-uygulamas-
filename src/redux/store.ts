import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import formReducer from './slices/formSlice';


const rootReducer = combineReducers({
  form: formReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['form']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const customizedMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware 
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
