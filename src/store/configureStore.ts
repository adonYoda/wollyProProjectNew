import { configureStore } from "@reduxjs/toolkit";
import { accountingApi } from "../API/accountingApi";
import userReducer from "./userSlice";
import tokenReducer from "./tokenSlice";
import { messageApi } from "../API/messageApi";




const middlewares = [accountingApi.middleware, messageApi.middleware]


export const store = configureStore({
  
  reducer: {
    [accountingApi.reducerPath]: accountingApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    user: userReducer,
    token: tokenReducer,
    
  },
  
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(...middlewares),
});

store.subscribe(() => localStorage.setItem('user', JSON.stringify(store.getState().user)));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch