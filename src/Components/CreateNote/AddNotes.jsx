/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import NoteOptions from "../NoteOptions/NoteOptions";
import Services from "../../Services/NotesServices.js";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import "./AddNotes.scss";


export default function AddNote(props) {
  const [showTitle, titleDisplay] = React.useState(props.editOpen);
  const [title, setTitle] = React.useState(props.noteDetail?.title);
  const [note, setNote] = React.useState(props.noteDetail?.description);
  const [edit] = React.useState(props.setEdited);
  const [clr, setClr] = React.useState(props.editColor);
  const [archive] = React.useState(props.archive);
  const [trash] = React.useState(props.trash);
  const [takeNote] = React.useState(true);

 
  const clickedNote = () => {
    titleDisplay(true);
  };

  const closeNote = () => {
   const formval = {
      title: title,
      description: note,
      id: [props.noteDetail?._id]
    };
    if (!edit) {
    Services.addNote(formval)
      .then((data) => {
        toast.success("Notes created");
        props.getall();
      })
      .catch((err) => {
        toast.error("Note not created");
      });

      }
      
      else {
      Services
        .updateNotes(formval)
        .then((data) => {
          props.getall();
        })
        .catch((err) => {
          console.log(err)
        });
        
      titleDisplay(false);
      props.dialogOff();
    } 
    
  };

  return (
    <div
      data-testId="close"
      className="addNotesMain"
      onClickAway={closeNote}
      style={{ backgroundColor: clr }}
    >
      <div className="notesField" onClick={clickedNote}>
        <div
          className="addNoteField"
          style={{ display: showTitle ? "block" : "none" }}
        >
          <div
            className="titleInput"
            data-testid="title"
          >
            <InputBase className= "titleName"
              placeholder="Title"
              value={title}
              fullWidth
              multiline
              onChange={(e) => setTitle( e.target.value)}
            /> 
              
          </div>
        </div>
        <div class="simpleNoteShow" style={{ display: setNote ? "block" : "none" }}>
          
          <div className="noteInput" data-testid="description">
            <InputBase
              placeholder="Take a note..."
              value={note}
              fullWidth
              multiline
              onChange={(e) => setNote( e.target.value)}
            />
          </div>
        </div>
        <ToastContainer />
      </div>
      <div
        className="addNoteField"
        style={{ display: showTitle ? "block" : "none" }}
      >
        <div className="addNoteOptions" data-testid="editId">
          <NoteOptions
            setClr={setClr}
            setEdited={edit}
            getall={props.getall}
            editId={props.editId}
            archive={archive}
            trash={trash}
            dialogOff={props.dialogOff}
            takeNote={takeNote}
          />
          {trash ? 
            " " : 
            <div className="closeNotes" data-testid="Save">
              {" "}
              <IconButton 
               onClick={closeNote}>
              Add
              </IconButton>
            </div>
          }
        </div>
      </div>
    </div>
  );
}