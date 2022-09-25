import { createSlice } from "@reduxjs/toolkit";

const draftMessageSlice = createSlice({
  name: "draftMessage",
  initialState: JSON.parse(localStorage.getItem('drafts')) || [],
  reducers: {
    setDrafts(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setDrafts } = draftMessageSlice.actions;
export default draftMessageSlice.reducer;
