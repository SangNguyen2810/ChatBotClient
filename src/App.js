import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import SideBar from './components/SideBar'
import Login from './components/Login'
import Dashboard from './components/Dashboard/Dashboard'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/dashboard' >
            <Dashboard />
          </Route>
          <Route path='/' >
            <Redirect to="/dashboard" />
          </Route>
        </Switch>



      </Router>
    </div>

  )


}

