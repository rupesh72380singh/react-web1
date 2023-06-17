import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform1 from './components/Textform1';
import Alert from './components/Alert';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
// import {Switch} from "react-router-dom"

 function App() {
  const[mode, setmode] = useState('light');
  // setmode('dark')
  const toggleclick=()=>{
    if(mode === "light"){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showalert("dark moode enabled","success");
      document.title= "textutial-dark modec"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("light mode enabled","succcess");
    }
  }
  const[alert , setalert] = useState(null);
  const showalert = (message , type)=>{
    setalert({
      msg: message,
      Type :type
    })
    setTimeout(() => {
      setalert(null);
    },3000);
  }

  return (
    <>
    <Router>
    <Navbar title = "Textutial" Link = "about" mode = {mode} toggleclick = {toggleclick}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element ={<About/>}></Route>
          <Route path="/" element ={<Textform1 about = "write to analyze" mode = {mode} showalert= {showalert}/>}></Route>
    </Routes>
    <About mode = {mode}/>
    {/* <Textform1 about = "write to analyze" mode = {mode} showalert= {showalert}/> */}
    </div>
    </Router>
    </>
    
  );
}

export default App;
