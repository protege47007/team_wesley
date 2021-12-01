import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Brand from "./tourComps/Brand";
import SingleTour from "./SingleTour";
import NoMoreTours from "./tourComps/NoMoreTours";

const url = "https://course-api.com/react-tours-project";

function Tours() {
  const [isLoading, setIsLoading] = useState(true);
  const [tourData, setTourData] = useState([]);
  const [isTour, setIsTour] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTourData(data);
        setIsLoading(!isLoading);
      })
      .catch((err) => console.log("error:", err));
  }, []);

  const removeTour = (e) => {
    e.preventDefault();
    let tourArray = [...tourData];
    let filteredArray = tourArray.filter((item) => item.id !== e.target.id);
    setTourData(filteredArray);

    if (filteredArray.length === 0) {
      setIsTour(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isTour ? (
        <div className="section">
          <main>
            <Brand />
            <SingleTour tourData={tourData} delete={removeTour} />
          </main>
        </div>
      ) : (
        <NoMoreTours />
      )}
    </>
  );
}

export default Tours;
