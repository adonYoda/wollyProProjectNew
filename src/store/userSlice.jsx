import { createSlice } from "@reduxjs/toolkit";
import { useGetUsersQuery } from "../API/accountingApi";
import { createToken } from "../utils/constants";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
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
    setCredentials: (
      state,
      {
        payload: { user, token },
      }
    ) => {
      state.user = user;
      state.token = token;
    },
    getUser(state, action) {},
    deleteUser(state) {
      state.login = null;
      state.firstName = null;
      state.lastName = null;
      state.about = null;
      state.profilePicture = null;
      state.userPhotos = null;
      state.phone = null;
      state.mail = null;
      state.addresses = null;
      state.roles = null;
    },
  },
});
export const { getUser, putUser, setCredentials } = userSlice.actions;
export const selectCurrentUser = (state) => state.user;
export default userSlice.reducer;
