import { createSlice } from "@reduxjs/toolkit";

const draftMessageSlice = createSlice({
  name: "draftMessage",
  initialState: JSON.parse(localStorage.getItem('drafts')) || [],
  reducers: {
    addDraft(state, action) {
      state.push(action.payload);
    },
    removeDraft(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const { addDraft, removeDraft } = draftMessageSlice.actions;
export default draftMessageSlice.reducer;
