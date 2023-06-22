import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Newsitem from './components/Newsitem';
// import Spinner from './components/Spinner'npm 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <News pagesize={5} country = "in" category = "sport"/> */}
        <Switch>
          <Route path="/"><News pagesize={5} country = "in" category = "sport"/></Route>
          <Route path="/entertainment"><News pagesize={5} country = "in" category = "entertainment"/></Route>
          <Route path="/business"><News pagesize={5} country = "in" category = "business"/></Route>
          <Route path="/ health"><News pagesize={5} country = "in" category = "health"/></Route>
          <Route path="/general"><News pagesize={5} country = "in" category = "general"/></Route>
          <Route path="/science"><News pagesize={5} country = "in" category = "science"/></Route>
          <Route path="/sports"><News pagesize={5} country = "in" category = "sports"/></Route>
          <Route path="/technology"><News pagesize={5} country = "in" category = "technology"/></Route>
        </Switch>

        </Router>
      </div>
    )
  }
}

