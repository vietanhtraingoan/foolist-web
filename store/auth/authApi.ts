/* eslint-disable no-restricted-globals */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_LINK } from "../../utils/constants";

export const authApi = createApi({
  reducerPath: "authApis",

  baseQuery: fetchBaseQuery({
    baseUrl: API_LINK,
    prepareHeaders: (headers, { getState }) => {
      // Get token from store (userSlice)
      // @ts-ignore
      const token = getState().auth?.accessToken;

      // Add token to headers
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `auth/sign-in`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
