import React, { useState } from 'react';
import './Login.scss'

export default function Login() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="Login">
        <div className= "Login__Form">
            <div className= "Login__Form__Container">
                <div className= "Login__Form__Container--username">
                    <input type="text" placeholder="Username"></input>
                </div>
                <div className= "Login__Form__Container--password">
                    <input type="text" placeholder="Password"></input>
                </div>
                <div className= "Login__Form__Container--button">
                    <button>Log In</button>
                </div>
            </div>
        </div>
    </div>
  );
}