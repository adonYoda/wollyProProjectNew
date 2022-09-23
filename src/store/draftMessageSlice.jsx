import { createSlice } from "@reduxjs/toolkit";

const draftMessageSlice = createSlice({
  name: "draftMessage",
  initialState: {
    id: {
      recipient: "",
      subject: "",
      content: "",
    },
  },

  reducers: {
    setDrafts(state, action) {
      state.draftMessage = action.payload;
    },
  },
});

export const { setDrafts } = draftMessageSlice.actions;
export default draftMessageSlice.reducer;
