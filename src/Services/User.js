import  Axios from 'axios'
require('dotenv').config()

Axios.defaults.baseURL = "http://localhost:3000"
export class UserNode {
    registration = (userDetails ) => {
        return Axios.post('/register', userDetails)
    }    

    login = (userCredentials)=>{
      return Axios.post('/login',userCredentials);
  }
  
}

