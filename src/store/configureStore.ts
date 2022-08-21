import { configureStore } from "@reduxjs/toolkit";
import { accountingApi } from "../API/accountingApi";
import userReducer from "./userSlice";


export const store = configureStore({
  reducer: {
    [accountingApi.reducerPath]: accountingApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch