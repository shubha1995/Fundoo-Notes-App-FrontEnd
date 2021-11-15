import Axios from "axios";

class UserNoteServices {
    static addNote = (data) => {
      const token = localStorage.getItem("token");
      return Axios.post("http://localhost:3000/createnotes", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    };
  
    static getNotes = () => {
      const token = localStorage.getItem("token");
      return Axios.get("http://localhost:3000/getnotes", {
        headers: { Authorization: `Bearer ${token}` },
      });
    };

      static deleteForever = (data) => {
        const token = localStorage.getItem("token");
        console.log("deleteToken ::", token);
        return Axios.delete(`http://localhost:3000/deletenotes/${data.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      };
    

    static forgotPassword = (data) => {
        return Axios.post("http://localhost:3000/forgotPassword", data);
      };

      static resetPassword = (data, token) => {
        console.log("token -> ", token);
        return Axios.post("http://localhost:3000/resetPassword", data, token);
      };
  }
  
  export default UserNoteServices;