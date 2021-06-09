import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SideBar from './components/SideBar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/'>
            <Login/>
          </Route>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>
        </Switch>
      </div>


    </Router>
  )


}

