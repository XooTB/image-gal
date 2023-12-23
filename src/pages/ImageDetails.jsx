import React, { useEffect } from "react";
import { images } from "../data/images";
import { useParams } from "react-router-dom";
import FeedBackForm from "../components/FeedBackForm";
import { useSelector } from "react-redux";

const ImageDetails = () => {
  const { id } = useParams();
  const feedbacks = useSelector((state) => state.feedback.feedback);
  const comments = feedbacks.filter((feedback) => feedback.imageId === id);

  const image = images.find((image) => image.id === Number(id));

  useEffect(() => {
    document.title = `${image.alt} | Image Details`;
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl capitalize font-bold mb-4">{image.alt}</h1>
      <img src={image.src} alt={image.alt} className="w-1/2" />
      <p className="text-gray-500">{image.description}</p>

      <div className="flex flex-col items-start w-2/4 gap-2 pb-10">
        <h2 className="text-2xl font-bold pb-4">User Comments:</h2>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex flex-col py-5 px-10 w-full border rounded-lg"
          >
            <p>
              <span className="font-bold">{comment.author}</span> said:
            </p>
            <p className="text-gray-500 pt-2"> {comment.body}</p>
          </div>
        ))}
      </div>
      <div className="w-3/4 border rounded-lg py-5">
        <FeedBackForm id={id} />
      </div>
    </div>
  );
};

export default ImageDetails;
