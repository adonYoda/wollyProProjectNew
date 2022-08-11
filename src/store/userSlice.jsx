import { createSlice } from "@reduxjs/toolkit";
import { useGetUsersQuery } from "../API/accountingApi";
import { createToken } from "../utils/constants";

const userSlice = createSlice({
  name: "users",
  initialState: {
    login: null,
    firstName: null,
    lastName: null,
    about: null,
    profilePicture: null,
    userPhotos: [],
    phone: null,
    mail: null,
    addresses: [],
    roles: [],
  },
  reducers: {
    putUser(state, action) {
      state.login = action.payload.login;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.about = action.payload.about;
      state.profilePicture = action.payload.profilePicture;
      state.userPhotos = action.payload.userPhotos;
      state.phone = action.payload.phone;
      state.mail = action.payload.email;
      state.addresses = action.payload.addresses;
      state.roles = action.payload.roles;
    },
    putToken(state, action) {},
    getUser(state, action) {},
    deleteUser(state, action) {},
  },
});
export const { getUser, putUser, putToken } = userSlice.actions;

export default userSlice.reducer;
