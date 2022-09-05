import { createSlice } from "@reduxjs/toolkit";


const tokenSlice = createSlice({
  name: "token",
  initialState: JSON.parse(localStorage.getItem('token')) || {},
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = null;
    }
  },
});
export const { setToken, logout } = tokenSlice.actions;
// export const selectCurrentUser = (state) => state.user;
export default tokenSlice.reducer;


/*
 if(JSON.parse(localStorage.getItem('token')).token !== null)
*/