import React, { useEffect } from "react";
import { images } from "../data/images";
import ImageCard from "../components/ImageCard";
import { useState } from "react";
import useFeedback from "../hooks/feedback";
import { useSelector } from "react-redux";

const home = () => {
  const [filter, setFilter] = useState("all");
  const [imagesToDisplay, setImagesToDisplay] = useState(images);
  const { getFeedbacks } = useFeedback();

  const categories = ["all", ...new Set(images.map((image) => image.category))];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value === "all") {
      setImagesToDisplay(images);
    } else {
      setImagesToDisplay(
        images.filter((image) => image.category === e.target.value)
      );
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-8">Image Gallery</h1>
      <div className="flex justify-center mb-8">
        <select
          className="border border-gray-400 rounded px-4 py-2 capitalize"
          value={filter}
          onChange={handleFilterChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {imagesToDisplay.map((image) => (
          <ImageCard key={image.alt} image={image} />
        ))}
      </div>
    </div>
  );
};

export default home;
