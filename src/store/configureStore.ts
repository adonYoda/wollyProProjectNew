import { configureStore } from "@reduxjs/toolkit";
import { wollyProApi } from "../API/wollyProApi";
import userReducer from "./userSlice";
import tokenReducer from "./tokenSlice";
import draftsReducer from "./draftMessageSlice";

export const store = configureStore({
  reducer: {
    [wollyProApi.reducerPath]: wollyProApi.reducer,
    user: userReducer,
    token: tokenReducer,
    drafts: draftsReducer,
  },

  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(wollyProApi.middleware),
});

store.subscribe(() => {
  localStorage.setItem("user", JSON.stringify(store.getState().user));
  store.getState().token === null
    ? localStorage.removeItem("token")
    : localStorage.setItem("token", JSON.stringify(store.getState().token));

  localStorage.setItem("drafts", JSON.stringify(store.getState().drafts));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
