import React from "react";
import './App.css';
import { Switch,Route } from 'react-router-dom';
import Login from "./Pages/Login/login.jsx";
import Register from "./Pages/Register/Register.jsx"
import FrogotPassword from "./Pages/ForgotPassword/ForgotPassword.jsx"

function App() {
  return (
    <>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path ='/register' component={Register}/>
      <Route exact path = '/' component = {Login}/>
      <Route path ='/forgotPassword' component={FrogotPassword}/>
    </Switch>
    </>
    
  );
}

export default App;
