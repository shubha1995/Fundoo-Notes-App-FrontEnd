//import axios from 'axios';
import  Axios from 'axios'
require('dotenv').config()
//Axios.defaults.baseURL = process.env.REACT_APP_URL;

 Axios.defaults.baseURL = "http://localhost:5000"
export class UserNode {
    registration = (userDetails ) => {
        return Axios.post('/registration', userDetails)
    }    

    login = (userCredentials)=>{
      return Axios.post('/login',userCredentials);
  }
}