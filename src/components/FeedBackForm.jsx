import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFeedback from "../hooks/feedback";

const FeedBackForm = ({ id }) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const { addComment } = useFeedback();

  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      const feedback = {
        imageId: id,
        author: user.email,
        body,
      };
      addComment(feedback);
      setBody("");
    } else {
      const feedback = {
        imageId: id,
        author: name,
        body,
      };
      addComment(feedback);
      setBody("");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Leave a Feedback</h2>
      <form onSubmit={handleSubmit}>
        {!user ? (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </>
        ) : (
          <div>
            <h1>
              Welcome back <span className="font-bold">{user.email}</span>. Want
              to leave a comment?
            </h1>
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium pt-5">
            Your comment:
          </label>
          <textarea
            id="message"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedBackForm;
