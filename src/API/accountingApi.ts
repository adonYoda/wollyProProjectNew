import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/configureStore";
import { baseUrl } from "../utils/constants";

export const accountingApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set("Authorization", `Basic ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getUser: build.mutation({
      query: (token) => ({
        url: "/login",
        method: "POST",
        headers: {
            Autorization: `Basic ${token}`
        }
      }),
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetUserMutation, useAddUserMutation } = accountingApi;
