import React, { useState } from 'react';
import Left from './Left'
import './Dashboard.scss'
import Center from './Center'
import Right from './Right'

export default function Dashboard() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="Dashboard">
      <Left />
      <Center />
      <Right />
    </div>
  );
}