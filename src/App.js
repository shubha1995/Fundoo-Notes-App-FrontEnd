import React from "react";
import './App.css';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
import Login from "./Pages/Login/login.jsx";
import Register from "./Pages/Register/Register.jsx"
import FrogotPassword from "./Pages/ForgotPassword/ForgotPassword.jsx"
import Dashboard from "./Pages/Dashboard/Dashboard.jsx"
import ErrorPage from "./Components/ErrorPage.jsx";
import ProtectedRoute from "../src/Components/ProtectedRoute.jsx";


function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path ='/register' component={Register}/>
      <Route exact path = '/' component = {Login}/>
      <Route path ='/forgotPassword' component={FrogotPassword}/>
      
      <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
          ></ProtectedRoute>
      <Route component={ErrorPage} />
    </Switch>
    </BrowserRouter>
    </>
    
  );
}

export default App;
