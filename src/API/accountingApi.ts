import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const accountingApi = createApi({
    reducerPath: 'accountingApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
       getUsers: build.query({
        query: () => "users"
       }),
       addUsers: build.mutation({
        query: (body) => ({
            url: 'users',
            method: 'POST',
            body,
        })
       })
    })
});

export const {useGetUsersQuery, useAddUsersMutation} = accountingApi