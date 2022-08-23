import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useDispatch } from "react-redux";
import { RootState } from "../store/configureStore";
import { putUser } from "../store/userSlice";
import { Dispatch, IUser, IUserProfile } from "../types";
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
        headers: {
          Autorization: `Basic ${token}`,
          method: "POST",
        },
      }),
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body,
      }),
      // transformResponse: (response) => {dispatch(putUser(response))
      // console.log(response);
      // }
      // ,
    }),
  }),
});

export const { useGetUserMutation, useAddUserMutation } = accountingApi;
