import {
  configureStore,
  isRejectedWithValue,
  MiddlewareAPI,
  Middleware,
} from "@reduxjs/toolkit";

import { authApi } from "./auth/authApi";
import authReducer, { userLogout } from "./auth/authSlice";

import { createWrapper } from "next-redux-wrapper";

const rootReducer = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
};

const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.log("rtkQueryErrorLogger", action);
      // unauthorized
      if (action.payload.status === 401) {
        api.dispatch(userLogout());
      }
    }
    return next(action);
  };

const store = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([rtkQueryErrorLogger, authApi.middleware]),
  });

export const wrapper = createWrapper(store);
