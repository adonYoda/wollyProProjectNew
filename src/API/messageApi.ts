import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMessage } from "../types";
import { baseUrl } from "../utils/constants";


export const messageApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (build) => ({
        addMessage: build.mutation({
            query: ({message, token}) => ({
                url: '/messagesURL',
                method: 'POST',
                body: message,
                headers: { 
                    Authorization: `Basic ${token}`
                }
            })
        })
    })
})