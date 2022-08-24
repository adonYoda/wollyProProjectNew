import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/configureStore";
import { putUser } from "../store/userSlice";
import { Dispatch } from "../types";
import { baseUrl } from "../utils/constants";

export const accountingApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).user.token;
    //   if (token) {
    //     headers.set("Authorization", `Basic ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (build) => ({
    getUser: build.mutation({
      query: (token) => {
        console.log(token);
        return {
          url: "/login",
          method: "POST",
          headers: {
            Authorization: `Basic ${token}`,
          },
        };
      },
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body,
      }),
      // transformResponse: (response: Response) => (dispatch: Dispatch) => {
      //   dispatch(putUser(response.json()));
      //   console.log(response);
      // },
    }),
  }),
});

export const { useGetUserMutation, useAddUserMutation } = accountingApi;
