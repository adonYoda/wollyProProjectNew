import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../utils/constants";


export const messageApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (build) => ({
    addMessage: build.mutation({
      query: ({ message, token }) => ({
        url: "/profile/mailbox",
        method: "POST",
        body: message,
        headers: {
          Authorization: `Basic ${token}`,
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
        token: string;
        folder: string;
      }
    >({
      query: (args) => {
        const { limit, page, token, folder } = args;
        return {
          url: `/profile/mailbox?folder=${folder}&limit=${limit}&page=${page}`,
          //params: { folder, limit, page },
          method: "GET",
          headers: {
            Authorization: `Basic ${token}`,
          },
        };
      },
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

export const {useGetMailboxMessagesQuery} = messageApi