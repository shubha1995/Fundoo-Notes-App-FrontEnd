import React from "react";
import AddNotes from "./AddNotes";
import DisplayNotes from "../DisplayCard/DisplayCard";
import Services from "../../Services/NotesServices.js";
import "./Notes.scss";
export default function Notes(props) {
    const [notes, setNotes] = React.useState([]);
  
    const getAllNotes = () => {
      Services.getNotes()
        .then((res) => {
          const { data } = res.data;
          let notes = data.reverse();
          setNotes(notes);
        })
        .catch((err) => {
          console.log("error = " + err);
        });
    };
  
    React.useEffect(() => {
      getAllNotes();
    }, []);
  
    return (
      <div className="mainContent" data-testId="wrapper">
        <AddNotes getall={getAllNotes} />
        <DisplayNotes notes={notes} getall={getAllNotes} />
        <div></div>
      </div>
    );
  }