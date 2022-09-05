import { createSlice } from "@reduxjs/toolkit";

const draftMessageSlice = createSlice({
  name: "draftMessage",
  initialState:
    { draftMessage: JSON.parse(localStorage.getItem("drafts")) } || [],
  reducers: {
    setDrafts(state, action) {
      state.draftMessage =
        JSON.parse(localStorage.getItem("drafts")) ||
        action.payload.draftMessage;
    },
  },
});

export const { setDrafts } = draftMessageSlice.actions;
export default draftMessageSlice.reducer;
