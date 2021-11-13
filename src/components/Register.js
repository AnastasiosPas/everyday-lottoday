import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import '../App.css';
import Body from './Body';


const Register = ({checkLogin}) => {
   

       const [regName, setRegName] = useState('');
       const [regEmail, setRegEmail] = useState('');
       const [regUsername, setRegUsername] = useState('');
       const [regPassword, setRegPassword] = useState('');

       let history = useHistory();


       const registerName = (e) => {
              setRegName(e.target.value);
              }
              
              const registerEmail = (e) => {
              setRegEmail(e.target.value);
              }
              
              const registerUsername = (e) => {
              setRegUsername(e.target.value);
              }
              
              const registerPassword = (e) => {
              setRegPassword(e.target.value);
              }
              
              
              const validateRegForm = () => {
              return regName.length > 0 && regPassword.length > 0 && regEmail.length > 0 && regUsername.length > 0
              };
              

              const submitRegister = () => {
                     fetch('http://localhost:3002/register', {
                       method: 'post',
                       headers: {'Content-Type': 'application/json'},
                       body: JSON.stringify({
                         password: regPassword,
                         username: regUsername,
                         name: regName,
                         email: regEmail
                       })
                     })
                     .then(response => response.json())
                     .then(newUser => {
                       if (newUser) {
                         history.push("/play");
                         checkLogin();
                       }
                     }) 
                   };
             


    return (

    <div>           
       <Body     subtitle2="Please fill in your details to register" /> 
        
       <form className="register">
              <input type="text" placeholder="name" name="name" id="regField1"  className="inputField "
                     onChange={registerName} />
              <input type="email" placeholder="email" name="email" id="regField2" className="inputField "
                     onChange={registerEmail} />
              <input type="text" placeholder="username" name="user" id="regField3" className="inputField "
                     onChange={registerUsername} />
              <input type="password" placeholder="password" name="password" id="regField4"  className="inputField "
                     onChange={registerPassword} />

              <input type="button" value="Register" className="loginBtn" onClick={submitRegister}
                     disabled={!validateRegForm()} />
       </form>
        
    </div>
    )
}

export default Register
