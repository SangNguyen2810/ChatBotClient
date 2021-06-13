import React, { useState } from 'react';
import './ConversationContainer.scss'
import Search from './Search'


export default function Center() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="ConversationContainer">
      <Search />
    </div>
  );
}