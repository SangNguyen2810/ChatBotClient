import React, { useState } from 'react';
import './Search.scss'


export default function Center() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="Search">
      <div className="Search--Input">
        <input type="text"/>
      </div>
      <div className="Search--Filter">
        <div className="Search--Filter__Container">
          <img alt="filter" src="/icon/filter.svg"/>
        </div>
      </div>
    </div>
  );
}