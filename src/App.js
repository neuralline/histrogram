import React, { useEffect, useState } from "react";
import Histogram from './components/Histogram'
import './App.css';

function App() {

  const [state, setState] = useState([
    //set default state
    {
      "title": "Loading",
      "data": {
        "React": 93,
        "JS": 50,
        "CSS": 25
      }
    }
  ]
  );


  //fetch data from server
  const getData = async (url = '') => {
   try{ const res = await fetch(url)
    const list = await res.json()
    setState(list)
   }
   catch(err){
     console.log('could not connect to data server', err)
   }
  }


  //when component mount
  useEffect(() => {
    getData('/data.json')
  }, [])


  //loop through data and create histogram
  return state.map(gram => {
    return (
      <div className="histogram" key={gram.title}>
        <h2 className='group-title'>Group by {gram.title}</h2>
        <Histogram graph={gram.data} />
      </div>
    );
  });
}

export default App;
