import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from './Navbar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
          <div className="col d-flex justify-content-end">
            <Navbar/>
          </div>
        <div className="row d-flex align-items-center">
          <div className="col">
            <Switch>
                <Route exact path="/" component={ HomeScreen } />
                <Route exact path="/about" component={ AboutScreen } />
                <Route exact path="/login" component={ LoginScreen } />
                <Redirect to="/" />
            </Switch>
            
          </div>
        </div>
      </div>
    </Router>
  )
}
