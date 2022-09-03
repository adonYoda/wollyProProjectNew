import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/configureStore";
import { Dispatch } from "../types";
import { baseUrl } from "../utils/constants";


type Id = {
  id: number
}

export const messageApi = createApi({
  tagTypes: ["Messages"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).token.token;
      if (token) {
        headers.set("Authorization", `Basic ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    addMessage: build.mutation({
      query: (message) => ({
        url: "/profile/mailbox",
        method: "POST",
        body: {
          ...message,
        },
      }),
    }),
    deleteMessage: build.mutation({
      query: ({ token, message }) => ({
        url: `/profile/mailbox/${message.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Basic ${token}`,
        },
      }),
    }),
    trashMessage: build.mutation({
      query: ({ token, message, body }) => ({
        url: `/profile/mailbox/${message.id}`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Basic ${token}`,
        },
      }),
    }),
    untrashMessage: build.mutation({
      query: ({ token, message, body }) => ({
        url: `/profile/mailbox/${message.id}`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Basic ${token}`,
        },
      }),
    }),
    readMessage: build.mutation({
      query: ({ token, message, body }) => ({
        url: `/profile/mailbox/${message.id}`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Basic ${token}`,
        },
      }),
    }),
    unreadMessage: build.mutation({
      query: ({ token, message, body }) => ({
        url: `/profile/mailbox/${message.id}`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Basic ${token}`,
        },
      }),
    }),
    starMessage: build.mutation({
      query: ({ token, message, body }) => ({
        url: `/profile/mailbox/${message.id}`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Basic ${token}`,
        },
      }),
    }),
    unstarMessage: build.mutation({
      query: ({ token, message, body }) => ({
        url: `/profile/mailbox/${message.id}`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Basic ${token}`,
        },
      }),
    }),
    findMessageById: build.mutation({
      query: ({ token, message }) => ({
        url: `/profile/mailbox/${message.id}`,
        method: "GET",
        headers: {
          Authorization: `Basic ${token}`,
        },
      }),
    }),
    findMessageByPeriod: build.mutation<
      any,
      {
        fromDate: string;
        toDate: string;
        limit: number;
        page: number;
        token: string;
      }
    >({
      query: (args) => {
        const { fromDate, toDate, limit, page, token } = args;
        return {
          url: `/profile/mailbox/period?fromDate=${fromDate}&toDate=${toDate}&limit=${limit}&page=${page}`,
          params: { fromDate, toDate, limit, page },
          method: "GET",
          headers: {
            Authorization: `Basic ${token}`,
          },
        };
      },
    }),

    //================================REFACTOR QUERIES================================
    getMailboxMessages: build.query<
      any,
      {
        limit: number;
        page: number;
        folder: string;
      }
    >({
      query: (args) => {
        const { limit, page, folder } = args;
        return {
          url: `/profile/mailbox?folder=${folder}&limit=${limit}&page=${page}`,
          method: "GET",
        };
      },
      providesTags: (result) => result
      ? [
        ...result.map((id: any) => ({ type: 'Messages', id })),
        { type: 'Messages', id: 'LIST' },
      ]
    : [{ type: 'Messages', id: 'LIST' }],
    }),
    //     getSentMessage: build.mutation<
    //       any,
    //       {
    //         limit: number;
    //         page: number;
    //         token: string;
    //       }
    //     >({
    //       query: (args) => {
    //         const { limit, page, token } = args;
    //         const folder = "sent";
    //         return {
    //           url: `/profile/mailbox?folder=sent&limit=${limit}&page=${page}`,
    //           params: { folder, limit, page },
    //           method: "GET",
    //           headers: {
    //             Authorization: `Basic ${token}`,
    //           },
    //         };
    //       },
    //     }),
    //     getStaredMessage: build.mutation<
    //       any,
    //       {
    //         limit: number;
    //         page: number;
    //         token: string;
    //       }
    //     >({
    //       query: (args) => {
    //         const { limit, page, token } = args;
    //         const folder = "stared";
    //         return {
    //           url: `/profile/mailbox?folder=stared&limit=${limit}&page=${page}`,
    //           params: { folder, limit, page },
    //           method: "GET",
    //           headers: {
    //             Authorization: `Basic ${token}`,
    //           },
    //         };
    //       },
    //     }),
    //     getUnreadMessage: build.mutation<
    //       any,
    //       {
    //         limit: number;
    //         page: number;
    //         token: string;
    //       }
    //     >({
    //       query: (args) => {
    //         const { limit, page, token } = args;
    //         const folder = "unread";
    //         return {
    //           url: `/profile/mailbox?folder=unread&limit=${limit}&page=${page}`,
    //           params: { folder, limit, page },
    //           method: "GET",
    //           headers: {
    //             Authorization: `Basic ${token}`,
    //           },
    //         };
    //       },
    //     }),
    //     getTrashedMessage: build.mutation<
    //     any,
    //     {
    //       limit: number;
    //       page: number;
    //       token: string;
    //     }
    //   >({
    //     query: (args) => {
    //       const { limit, page, token } = args;
    //       const folder = "trash";
    //       return {
    //         url: `/profile/mailbox?folder=${folder}&limit=${limit}&page=${page}`,
    //         params: { folder, limit, page },
    //         method: "GET",
    //         headers: {
    //           Authorization: `Basic ${token}`,
    //         },
    //       };
    //     },
    //   }),
    //================================================================
  }),
});

export const { useGetMailboxMessagesQuery, useAddMessageMutation } = messageApi;

// export const getMessages = (args: any) => {
//   return () => {
//     const { limit, page, folder } = args;
//     const token = localStorage.getItem("token");
//     fetch(`/profile/mailbox?folder=${folder}&limit=10&page=${page}`, {
//       method: "GET",
//       headers: { Authorization: `Basic ${token}` },
//     })
//     .then((response)=> {
//       if(response.ok){
//         return response.json();
//       }else {console.log('ERROR');
//       }
//     })
    
//   };
// };
