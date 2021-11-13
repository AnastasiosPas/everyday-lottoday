import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Register from './components/Register';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Play from './components/Play';
import Rules from './components/Rules';
import About from './components/About';
import LiveDraw from './components/LiveDraw';

import './App.css';


function App() {

  const storedLoginState = localStorage.getItem('isLoggedIn');
  const [isLoggedIn, setIsLoggedIn] = useState(
        (storedLoginState) ? !storedLoginState : true); 


 // let history = useHistory();

  // useEffect(() => {
  //   fetch('http://localhost:3002')
  //   .then(response => response.json() )
  //   .then((response) => console.log("this is the APP GET response", response))
  // } )
  
  useEffect(() => {
      localStorage.setItem("isLoggedIn", Boolean(isLoggedIn))
    }
  , [isLoggedIn])



  const loginCheck = () => {
    return isLoggedIn;
  }

  const checkLogin = () => {
     setIsLoggedIn(!isLoggedIn); 
  }


  const toggleLogIn = () => {
    if (isLoggedIn ) {
      setIsLoggedIn(!isLoggedIn);
     
    }
  }

  return (
    
   
     
        <div>
         
            <Router>
              <div className="app">
                <ul className="header" >
                    <li>
                      <Link to="/" >Home</Link>
                    </li>
                    <li>
                      <Link to="/register" >Register</Link>
                    </li>
                    <li>
                      <Link to="/login" onClick={toggleLogIn}>{!isLoggedIn ? 'Log-in' : 'Log-out'}</Link>
                    </li>
                    <li  >
                      <Link to="/play" className="playBtn">PLAY</Link>
                    </li>
                    <li>
                      <Link to="/rules" >Rules</Link>
                    </li>
                    <li>
                      <Link to="/about" >About</Link>
                    </li>
                    <li  >
                      <Link to="/livedraw" className="playBtn">Live Draw</Link>
                    </li>
                </ul>

                <Switch >
                    <Route exact path="/">
                      <Home />
                    </Route>

                    <Route exact path="/register">
                    <Register checkLogin={checkLogin} /> 
                    </Route>

                    <Route exact path="/login">
                    <Login checkLogin={checkLogin} />
                    </Route>

                    <Route exact path="/play">
                      <Play loginCheck={loginCheck}/>
                    </Route>

                    <Route path="/rules">
                      <Rules />
                    </Route>

                    <Route path="/about">
                      <About />
                    </Route>

                    <Route path="/livedraw">
                      <LiveDraw />
                    </Route>
                </Switch>   

                <Footer />
            </div>
          </Router>
      
        </div>     
   
  );
}



export default App;
