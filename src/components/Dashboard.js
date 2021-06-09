import React, { useState } from 'react';

export default function Dashboard() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      Welcome to Dashboard
    </div>
  );
}