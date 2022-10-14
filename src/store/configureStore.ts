import { configureStore } from "@reduxjs/toolkit";
import { woolyProApi } from "../API/wollyProApi";
import userReducer from "./userSlice";
import tokenReducer from "./tokenSlice";
import draftsReducer from "./draftMessageSlice";

export const store = configureStore({
  reducer: {
    [woolyProApi.reducerPath]: woolyProApi.reducer,
    user: userReducer,
    token: tokenReducer,
    drafts: draftsReducer,
  },

  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(woolyProApi.middleware),
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
