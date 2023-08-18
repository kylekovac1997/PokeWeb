// store.ts

import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "../login/LoggedIn";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

export type RootState = ReturnType<typeof store.getState>;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer });

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
