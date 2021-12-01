import React, { useState, useEffect } from "react";

function Loading() {
  const [ellipsis, setEllipsis] = useState("");
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (timer < 3) {
        setEllipsis(ellipsis + ".");
        setTimer((timer) => timer + 1);
      } else {
        setEllipsis("");
        setTimer(0);
      }
    }, 1000);
  }, [ellipsis, timer]);

  return <h1 className="loading">Loading{ellipsis}</h1>;
}

export default Loading;
