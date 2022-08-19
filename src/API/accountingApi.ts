import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Dispatch } from '../types';

import { baseUrl } from '../utils/constants';



export const accountingApi = createApi({
    reducerPath: 'accountingApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
       getUsers: build.query({
        query: (login) => `users/${login}`
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

// export const getUser = (token: string, login: string) => {
//      return (dispatch: Dispatch) => {
//         fetch(`${baseUrl}users/${login}`, {
//           method: "POST",
//           headers: {
//             Authorization: token,
//           },
//         })
//           .then((response) => {
//             if (response.ok) {
//               return response.json();
//             } else {
//               throw new Error(response.status.toString());
//             }
//           })
//           .then((userProfile) => {
//            dispatch(putUser(userProfile));
//             dispatch(putTokenAction(token));
//           })
//           .catch((e) => {
//             console.log(e.message);
//             //TODO handle error
//           });
//       };
// }


export const {useGetUsersQuery, useAddUsersMutation} = accountingApi