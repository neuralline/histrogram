import React from "react";

const Graph = ({ name, value, barColor }) => {
  

  return (
    <div className='graph-holder' key={name}>
      <div className="title">{name}</div>
      <div className="digit">{value}</div>
      <div className="bar-holder">
      <div className="bar" style={{width:`${value}%`, backgroundColor:`${barColor}`}}></div>
      </div>
    </div>
  );
};

export default Graph;
