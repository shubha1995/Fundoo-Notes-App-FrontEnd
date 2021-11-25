import React from "react";
import AddNotes from "./AddNotes";
import DisplayNotes from "../DisplayCard/DisplayCard";
import Services from "../../Services/NotesServices.js";
import AddLabel from "../Label/AddLabel"
import "./Notes.scss";
export default function Notes(props) {
    const [notes, setNotes] = React.useState([]);
    const [label, setLabel] = React.useState([]);
  
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
    // const getAllLabels = () => {
    //   Services.getlabels()
    //     .then((res) => {
    //       const { data } = res.data;
    //       let label= data.reverse();
    //       setLabel(label);
    //     })
    //     .catch((err) => {
    //       console.log("error = " + err);
    //     });
    // };
  
    React.useEffect(() => {
      getAllNotes();
    }, []);
  
    return (
      <div className="mainContent" data-testId="wrapper">
        <AddNotes getall={getAllNotes} />
        {/* <AddLabel getall={getAllNotes} /> */}
        <DisplayNotes notes={notes} getall={getAllNotes} />
        {/* <DisplayNotes label={label} getall={getAllLabels} /> */}
        <div></div>
      </div>
    );
  }