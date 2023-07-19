import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "../login/LoggedIn";
const store = configureStore({ reducer: { loggedIn: loggedInReducer } });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
