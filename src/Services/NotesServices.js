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

    static updateNotes = ( data) => {
      const token = localStorage.getItem("token");
      return Axios.put(`http://localhost:3000/updatenotes/${data.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    };

   

      static deleteForever = (data) => {
        const token = localStorage.getItem("token");
        return Axios.delete(`http://localhost:3000/deletenotes/${data.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      };
    

    static forgotPassword = (data) => {
        return Axios.post("http://localhost:3000/forgotPassword", data);
      };

      static resetPassword = (data, token) => {
        return Axios.post(`http://localhost:3000/resetPassword/${token}`, data);
      };

  
    static addLabel = (labelData) => {
      const token = localStorage.getItem("token");
      return Axios.post("http://localhost:3000/createlabel", labelData, {
        headers: { Authorization: `Bearer ${token}` },
      });
    };
    static getlabels = () => {
      const token = localStorage.getItem("token");
      return Axios.post("http://localhost:3000/getlabels",  {
        headers: { Authorization: `Bearer ${token}` },
      });
    };
    

  }
  
  export default UserNoteServices;