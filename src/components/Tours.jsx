import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Brand from "./tourComps/Brand";
import SingleTour from "./SingleTour";

const url = "https://course-api.com/react-tours-project";

function Tours() {
  const [isLoading, setIsLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

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
  useEffect(() => {
    tours();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="section">
          <main>
            <Brand />
            <SingleTour tourData={tourData} />
          </main>
        </div>
      )}
    </>
  );
}

export default Tours;
