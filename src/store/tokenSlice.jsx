import { createSlice } from "@reduxjs/toolkit";


const tokenSlice = createSlice({
  name: "token",
  initialState: { token: JSON.parse(localStorage.getItem('token')) } || {},
  reducers: {
    setToken(state, action) {
      state.token = JSON.parse(localStorage.getItem('token')) || action.payload.token;
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem('token');
    }
  },
});
export const { setToken, logout } = tokenSlice.actions;
// export const selectCurrentUser = (state) => state.user;
export default tokenSlice.reducer;
