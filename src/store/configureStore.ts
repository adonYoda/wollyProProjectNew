import { configureStore } from "@reduxjs/toolkit";
import { accountingApi } from "../API/accountingApi";
import userReducer from "./userSlice";
import tokenReducer from "./tokenSlice";


export const store = configureStore({
  reducer: {
    [accountingApi.reducerPath]: accountingApi.reducer,
    user: userReducer,
    token: tokenReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountingApi.middleware),
});

store.subscribe(() => localStorage.setItem('user', JSON.stringify(store.getState().user)));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch