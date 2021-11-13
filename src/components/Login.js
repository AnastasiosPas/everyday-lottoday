import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Body from './Body';
import '../App.css';


const Login = ({ checkLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    let history = useHistory();

    const validateForm = () => {
      return username.length > 0 && password.length > 0;
    };
  
    const submitLogin = () => {
      fetch('http://localhost:3002/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({         
          username: username,
          password: password
        })
      })
      .then(response => response.json())
      .then(user => {
        if (user.id){
          history.push("/play");
          checkLogin();
        }
      }) 
    };


    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    };
  
    const onChangePassword =(e) => {
      setPassword(e.target.value)
    }; 


  return (

  <div>           
      <Body subtitle2="Please log in with your credentials:" />

    <div className="login">
      <input type="text" placeholder="username" name="user" className="inputField"
              onChange={onChangeUsername}
              />
      <input type="password" placeholder="password" name="password" className="inputField"
              onChange={onChangePassword}
              />
      <input type="button" value="Login" onClick={submitLogin} className="loginBtn"
              disabled={!validateForm()}
              />
    </div>
  </div>
  )
}

export default Login
