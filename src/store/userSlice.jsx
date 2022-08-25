import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem('user')) || {
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
    getUser(state, action) { },
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

export const { getUser, putUser } = userSlice.actions;
// export const selectCurrentUser = (state) => state.user;
export default userSlice.reducer;
