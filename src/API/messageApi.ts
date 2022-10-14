import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/configureStore";
import { baseUrl } from "../utils/constants";

export const messageApi = createApi({
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
  tagTypes: ['Messages'],

  endpoints: (build) => ({

    //================================QUERIES================================
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
      providesTags: ["Messages"]
    }),
    //================================================================


    addMessage: build.mutation({
      query: (message) => ({
        url: "/profile/mailbox",
        method: "POST",
        body: {
          ...message,
        },
      }),
      invalidatesTags: ['Messages']
    }),
    deleteMessage: build.mutation({
      query: (id) => ({
        url: `/profile/mailbox/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Messages']
    }),
    trashMessage: build.mutation({
      query: ({ id, isTrashed }) => ({
        url: `/profile/mailbox/${id}`,
        method: "PUT",
        body: {
          trashed: isTrashed,
        },
      }),
      invalidatesTags: ['Messages']
    }),
    readMessage: build.mutation({
      query: ({ id, isRead }) => ({
        url: `/profile/mailbox/${id}`,
        method: "PUT",
        body: {
          read: isRead,
        },
      }),
      invalidatesTags: ['Messages']
    }),
    starMessage: build.mutation({
      query: ({ id, isStared }: any) => ({
        url: `/profile/mailbox/${id}`,
        method: "PUT",
        body: {
          stared: isStared,
        },
      }),
      invalidatesTags: ['Messages']
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

    
  }),
});

export const {
  useDeleteMessageMutation,
  useGetMailboxMessagesQuery,
  useAddMessageMutation,
  useStarMessageMutation,
  useTrashMessageMutation,
  useReadMessageMutation,
} = messageApi;
