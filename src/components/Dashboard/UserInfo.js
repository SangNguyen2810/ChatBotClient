import React, { useState } from 'react';
import './UserInfo.scss'

export default function Left() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="UserInfo">
      <div className="UserInfo__name">Sang Nguyen</div>
      <div className="UserInfo__addFriend">+ Add Friend</div>
    </div>
  );
}