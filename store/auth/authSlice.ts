import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ACCESS_TOKEN } from "../../utils/constants";

import { authApi } from "./authApi";

interface Auth {
  isUserLogin: boolean;
  accessToken: any;
}

const initialState: Auth = {
  isUserLogin: false,
  accessToken: "",
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userLogin: (state: Auth, action: PayloadAction) => {
      state.isUserLogin = true;
    },
    userLogout: (state: Auth, action: PayloadAction) => {
      state.isUserLogin = false;
      state.accessToken = "";
      localStorage.clear();
    },
  },
  extraReducers: (builder: any) => {
    // login with RTK query
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state: Auth, action: PayloadAction<any>) => {
          state.isUserLogin = true;
          state.accessToken = action.payload.accessToken;
        }
      )
      .addMatcher(
        authApi.endpoints.login.matchRejected,
        (state: Auth, action: PayloadAction<any>) => {}
      );
  },
});

const { reducer, actions } = userInfo;
export const { userLogin, userLogout } = actions;
export default reducer;
