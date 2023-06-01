// import { configureStore } from '@reduxjs/toolkit';
// import usersReducer from '../components/UsersManager/usersSlice';

// export const store = configureStore({
//   reducer: {
//     users: usersReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

// import { combineReducers } from 'redux';
// import { configureStore, createAction } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// ---------- usersManager ----------
// import usersReducer, {
//   usersApiSlice,
// } from './../components/UsersManager/components/usersSlice';

// export const resetStore = createAction('resetStore');

// const rootReducer = combineReducers({
//   users: usersReducer,
//   [usersApiSlice.reducerPath]: usersApiSlice.reducer,
// });

// const appReducer: typeof rootReducer = (state, action) => {
//   if (action.type === resetStore.type) {
//     return rootReducer(undefined, action);
//   }
//   return rootReducer(state, action);
// };

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   blacklist: [usersApiSlice.reducerPath],
// };

// const persistedReducer = persistReducer(persistConfig, appReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(usersApiSlice.middleware),
// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// ---------- Todos Managers ----------

import { combineReducers } from 'redux';
import { configureStore, createAction } from '@reduxjs/toolkit';
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

import todosReduser, {
  todosApiSlice,
} from './../components/TodosManager/TodosSlice';

export const resetStore = createAction('resetStore');

const rootReducer = combineReducers({
  users: todosReduser,
  [todosApiSlice.reducerPath]: todosApiSlice.reducer,
});

const appReducer: typeof rootReducer = (state, action) => {
  if (action.type === resetStore.type) {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [todosApiSlice.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(todosApiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
