import { createSlice } from "@reduxjs/toolkit";
import { useGetUsersQuery } from "../API/accountingApi";
import { createToken } from "../utils/constants";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    putUser(state, action) {
     
    },
    putToken(state, action) {
    
    },
    getUser(state, action) {
     
    },
    deleteUser(state, action) {},
  },
});
export const { getUser, putUser, putToken } = userSlice.actions;

export default userSlice.reducer;
