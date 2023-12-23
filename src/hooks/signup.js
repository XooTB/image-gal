import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/AuthReducer";

export default function useSignup() {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const signup = async (email, password) => {
    setisLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      dispatch(login(data));

      setisLoading(false);
    } catch (error) {
      setError(error.message);
      setisLoading(false);
      throw error;
    }
  };

  return {
    isLoading,
    error,
    signup,
  };
}
