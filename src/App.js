import React from "react";
import './App.css';
import { Switch,Route } from 'react-router-dom';
import Login from "./Pages/Login/login.jsx";
import Register from "./Pages/Register/Register.jsx"

function App() {
  return (
    <>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path ='/register' component={Register}/>
      <Route exact path = '/' component = {Login}/>
    </Switch>
    </>
    
  );
}

export default App;
