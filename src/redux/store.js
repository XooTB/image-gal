import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import FeedbackReducer from "./FeedbackReducer";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    feedback: FeedbackReducer,
  },
});
