// Import the createSelector function from reselect
import { createSelector } from "reselect";
import { RootState } from "../store/ReduxStore";

// Define the input selectors
const isLoggedInSelector = (state: RootState) => state.loggedIn.isLoggedIn;
const usernameSelector = (state: RootState) => state.loggedIn.username;
const accessTokenSelector = (state: RootState) => state.loggedIn.accessToken;
const refreshTokenSelector = (state: RootState) => state.loggedIn.refreshToken;

// Use createSelector to create the memoized selector
export const UserLoggedIn = createSelector(
  isLoggedInSelector,
  usernameSelector,
  accessTokenSelector,
  refreshTokenSelector,
  (isLoggedIn, username, accessToken, refreshToken) => ({
    isLoggedIn,
    username,
    accessToken,
    refreshToken,
  })
);
