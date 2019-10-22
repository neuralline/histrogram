import React from "react";
import Graph from "./Graph";


const gradiant = ()=>{
    return  `-webkit-radial-gradient(45% center, circle, #${+Math.floor(Math.random()*16777215).toString(16)} 40%, rgba(139,66,86,0.9))`
 }



const Histogram = ({graph}) => {
    const barColor = '#'+Math.floor(Math.random()*16777215).toString(16)
  return Object.entries(graph).map(([name, value]) => {
    return <Graph key={name} name={name} value={value} barColor={barColor} />;
  });
};

export default Histogram;