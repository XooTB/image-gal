import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    feedback: [],
  },
  reducers: {
    addFeedback: (state, action) => {
      state.feedback = [...state.feedback, action.payload];
    },
    emptyFeedbacks: (state) => {
      state.feedback = [];
    },
    addFeedbacks: (state, action) => {
      state.feedback = action.payload;
    },
  },
});

export const { addFeedback, emptyFeedbacks, addFeedbacks } =
  feedbackSlice.actions;

export default feedbackSlice.reducer;
