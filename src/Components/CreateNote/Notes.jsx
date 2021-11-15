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
        console.log("res :: " + res);
        let notes = data.reverse();
        console.log("get all note :: ", notes);
        setNotes(notes);
      })
      .catch((err) => {
        console.log("error = " + err);
      });
  };

  return (
    <div className="mainContent">
      <AddNotes getall={getAllNotes} />
      <DisplayNotes notes={notes} getall={getAllNotes} />
      <div></div>
    </div>
  );
}