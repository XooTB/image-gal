import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex justify-center items-center">
      <Link to={`/image/${image.id}`}>
        <img className="w-full" src={image.src} alt={image.alt} />
      </Link>
    </div>
  );
};

export default ImageCard;
