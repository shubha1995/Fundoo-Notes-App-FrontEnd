import React from "react";
import './App.css';
import Login from "./Pages/Login/login.jsx";
import SignUp from "./Pages/Register/signUp.jsx"

function App() {
  return (
    <div className="App">
      <Login/>,
      <SignUp/>
    </div>
  );
}

export default App;
