import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Brand from "./tourComps/Brand";
import SingleTour from "./SingleTour";

const url = "https://course-api.com/react-tours-project";

function Tours() {
  const [isLoading, setIsLoading] = useState(true);
  const [tourData, setTourData] = useState([]);
  const [isTour, setIsTour] = useState(true);

  const tours = () => {
    try {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          setTourData(data);
          setIsLoading(!isLoading);
        });
    } catch (err) {
      console.error("error: ", err);
    }
  };

  const removeTour = (e) => {
    e.preventDefault();
    let tourArray = [...tourData];
    let filteredArray = tourArray.filter((item) => item.id !== e.target.id);
    setTourData(filteredArray);

    if (filteredArray.length === 0) {
      setIsTour(false);
    }
  };

  useEffect(() => {
    tours();
  }, []);

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
        <p>Don't Show</p>
      )}
    </>
  );
}

export default Tours;
