import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoggedInState {
  isLoggedIn: boolean;
  username: string;
  accessToken: string;
  refreshToken: string;
  description: string;
  profilePic: string;
  email: string;
}

export const initialState: LoggedInState = {
  isLoggedIn: false,
  username: "",
  accessToken: "",
  refreshToken: "",
  description: "",
  profilePic: "",
  email: "",
};

export const LoggedInState = createSlice({
  name: "LoggedInState",
  initialState,
  reducers: {
    setUserLoginStatus: (_state, action: PayloadAction<LoggedInState>) => {
      return action.payload;
    },
  },
});

export const { setUserLoginStatus } = LoggedInState.actions;
export default LoggedInState.reducer;
