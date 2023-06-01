import { combineReducers } from 'redux';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commentsReducer, { commentsApiSlice } from '../myComments/commentsSlice';

const rootReducer = combineReducers({
  comments: commentsReducer,
  [commentsApiSlice.reducerPath]: commentsApiSlice.reducer,
});

const appReducer: typeof rootReducer = (state, action) => {
  return rootReducer(state, action);
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [commentsApiSlice.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(commentsApiSlice.middleware),
});

export default store;
