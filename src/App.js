import React, {useState, useEffect} from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, load] = useState(true);
  const [error, catchErr] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(res => {

      if(res.ok){
        return res.json();
      }
      throw res;
    })
    .then(data => {
      setData(data);
    })
    .catch(err => {
      console.error('error: ', err);
      catchErr(err);
    })
    .finally(() => {
      load(false);
    })
  }, [])

  console.log(data);



  return<div className="main">
    {isLoading? <Loading/>: <Tours data={data}/>}
  </div>
}

export default App;
