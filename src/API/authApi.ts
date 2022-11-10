import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/configureStore";
import { baseUrl } from "../utils/constants";
import { wollyProApi } from "./wollyProApi";

const authApi = wollyProApi.injectEndpoints({
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
        currentUser: build.mutation({
            query: (token) => ({
                url: "/user",
                method: "POST",
                headers: {
                    Authorization: `Basic ${token}`,
                },
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
    overrideExisting: true,
});

export const {
    useGetUserMutation,
    useAddUserMutation,
    useCurrentUserMutation,
} = authApi;
