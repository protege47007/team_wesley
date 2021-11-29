import React, { useState, useEffect } from "react";

function Loading() {

  
  let [ellipsis, setState] = useState('');
  const [timer, count] = useState(0);
    useEffect(() => {
        setTimeout(()=>{
            if(timer < 3){
                setState(ellipsis + ".");
                count(timer + 1);
            }
            else{
                setState("");
                count(0);
            }
        }, 1000)
    }, [timer]);


  return <h1 className="loading">Loading{ellipsis}</h1>;
}

export default Loading;
