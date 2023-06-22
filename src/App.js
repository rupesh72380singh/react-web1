// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/Spinner'npm 
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  apikey= "process.env.REACT_APP_NEWS_API"
  state = {
    progress:0
  }
  setProgress= (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        {/* <News setProgress={setProgress} pagesize = '5' country = 'us' category='health'/> */}
        
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />

        {/* // <News setProgress={setProgress} pagesize={5} country = "in" category = "sport"/> */}
        <Routes>
          <Route exact path="/" element ={<News setProgress={this.setProgress} apikey= {this.apikey} key="general" pagesize={5} country = "in" category = "general"/>}></Route>
          <Route exact  path="/About" element ={<News setProgress={this.setProgress} apikey= {this.apikey} key="About" pagesize={5} country = "in" category = "About"/>}></Route>
          <Route exact  path="/entertainment" element ={<News setProgress={this.setProgress} apikey= {this.apikey} key="entertainment"pagesize={5} country = "in" category = "entertainment"/>}></Route>
          <Route exact  path="/Business" element ={<News setProgress={this.setProgress} apikey= {this.apikey} key="Business" pagesize={5} country = "in" category = "Business"/>}></Route>
          <Route exact  path="/science" element ={<News setProgress={this.setProgress} apikey= {this.apikey} key="science"pagesize={5} country = "in" category = "science"/>}></Route>
          <Route exact  path="/health" element ={<News setProgress={this.setProgress} apikey= {this.apikey} key="health"pagesize={5} country = "in" category = "health"/>}></Route>
          <Route exact  path="/sport" element ={<News setProgress={this.setProgress} apikey= {this.apikey} key="sport"pagesize={5} country = "in" category = "sport"/>}></Route>
          <Route exact path="/technology" element ={<News setProgress={this.setProgress} apikey= {this.apikey} key="technology"pagesize={5} country = "in" category = "technology"/>}></Route>
          <Route exact path="/general" element ={<News setProgress={this.setProgress} apikey= {this.apikey} key="general"pagesize={5} country = "in" category = "general"/>}></Route>
        </Routes>
          

      </Router>
      </div>
    )
  }
}
