import React from "react";

import Post from "./tourComps/Post";



function SingleTour({ tourData }) {
  return tourData.map((data) => {
    const { id, image, info, name, price } = data;
    return (
      <Post key={id} image={image} price={price} name={name} info={info} />
    );
  });
}

export default SingleTour;
