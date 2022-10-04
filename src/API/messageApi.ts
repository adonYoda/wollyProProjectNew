import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/configureStore";
import { baseUrl } from "../utils/constants";

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
      query: (id) => ({
        url: `/profile/mailbox/${id}`,
        method: "DELETE",
      }),
    }),
    trashMessage: build.mutation({
      query: ({ id, isTrashed }) => ({
        url: `/profile/mailbox/${id}`,
        method: "PUT",
        body: {
          trashed: isTrashed,
        },
      }),
    }),
    readMessage: build.mutation({
      query: ({ id, isRead }) => ({
        url: `/profile/mailbox/${id}`,
        method: "PUT",
        body: {
          read: isRead,
        },
      }),
    }),
    starMessage: build.mutation({
      query: ({ id, isStared }: any) => ({
        url: `/profile/mailbox/${id}`,
        method: "PUT",
        body: {
          stared: isStared,
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
      providesTags: (result) =>
        result
          ? [
              ...result.map((id: any) => ({ type: "Messages", id })),
              { type: "Messages", id: "LIST" },
            ]
          : [{ type: "Messages", id: "LIST" }],
    }),
    //================================================================
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
