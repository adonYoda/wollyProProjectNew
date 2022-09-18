import { configureStore } from "@reduxjs/toolkit";
import { accountingApi } from "../API/accountingApi";
import userReducer from "./userSlice";
import tokenReducer from "./tokenSlice";
import { messageApi } from "../API/messageApi";
import draftsReducer from "./draftMessageSlice"



const middlewares = [accountingApi.middleware, messageApi.middleware]


export const store = configureStore({

  reducer: {
    [accountingApi.reducerPath]: accountingApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    user: userReducer,
    token: tokenReducer,
    // drafts: draftsReducer,
  },

  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(accountingApi.middleware, messageApi.middleware),
});

store.subscribe(() => {
  localStorage.setItem('user', JSON.stringify(store.getState().user));
  store.getState().token === null ? localStorage.removeItem('token') : localStorage.setItem('token', JSON.stringify(store.getState().token));

  // localStorage.setItem('drafts', JSON.stringify(store.getState().drafts))
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch