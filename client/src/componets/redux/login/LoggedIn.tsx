import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoggedInState {
  isLoggedIn: boolean;
  username: string;
}

const initialState: LoggedInState = {
  isLoggedIn: false,
  username: "",
};

const LoggedInState = createSlice({
  name: "LoggedInState",
  initialState,
  reducers: {
    setUserLoginStatus: (state, action: PayloadAction<LoggedInState>) => {
      return action.payload;
    },
  },
});

export const { setUserLoginStatus } = LoggedInState.actions;
export default LoggedInState.reducer;
