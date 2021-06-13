import React, { useState } from 'react';
import './Center.scss'
import UserInfo from './UserInfo'
import ConversationContainer from './ConversationContainer'

export default function Center() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="Center">
      <div className="Center__Container">
        <UserInfo />
        <ConversationContainer/>
      </div>

    </div>
  );
}