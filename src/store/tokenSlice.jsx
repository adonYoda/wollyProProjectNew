import { createSlice } from "@reduxjs/toolkit";


const tokenSlice = createSlice({
  name: "token",
  initialState: { token: JSON.parse(localStorage.getItem('token')) } || {},
  reducers: {
    setToken(state, action) {
      state.token = JSON.parse(localStorage.getItem('token')) || action.payload.token;
    },
  },
});
export const { setToken } = tokenSlice.actions;
// export const selectCurrentUser = (state) => state.user;
export default tokenSlice.reducer;
