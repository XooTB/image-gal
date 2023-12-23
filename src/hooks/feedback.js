import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeedback,
  emptyFeedbacks,
  addFeedbacks,
} from "../redux/FeedbackReducer";

export default function useFeedback() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const addComment = async (feedback) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      dispatch(addFeedback(data));
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  const getFeedbacks = async () => {
    setIsLoading(true);
    setError(null);
    dispatch(emptyFeedbacks());

    try {
      const response = await fetch("http://localhost:3001/comments");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      dispatch(addFeedbacks(data));
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    addComment,
    getFeedbacks,
  };
}
