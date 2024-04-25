import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tableDataReducer from './slices/tableDataSlice'

const rootReducer = combineReducers({
  table: tableDataReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['table']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
