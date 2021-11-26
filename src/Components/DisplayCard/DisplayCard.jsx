/* eslint-disable react/style-prop-object */
import React from "react";
import { Grid } from "@material-ui/core";
import NoteOptions from "../../Components/NoteOptions/NoteOptions";
import Dialog from "@material-ui/core/Dialog";
import AddNote from "../../Components/CreateNote/AddNotes";
import Typography from "@material-ui/core/Typography";
import "./DisplayCard.scss";
import AddLabel  from "../Label/AddLabel"


export default function DisplayNotes(props) {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [clr, setClr] = React.useState("#fafafa");
  const [noteData, setNoteData] = React.useState({ title: '', note: '', noteId: '' });
  const [noteLabel, setNoteLabel] = React.useState({ label: '', noteId: '' });

  const setDelete = () => {
    dialogClose();
    setOpen(false);
  };
  const dialogOpen = (e, data) => {
    e.stopPropagation();
    setEdit(true);
    setClr(data.color);
    setNoteData(data);
    setNoteLabel(data);
    
    setOpen(true);
  };

  const storeOption = (e, data) => {
    e.stopPropagation();
    setNoteData(data);
    setNoteLabel(data);
  };

  const dialogClose = () => {
    setOpen(false);
  };
   

  const Note = () => {
    
    return (
      <div className="AllNotes">
        
        {props.notes.length &&
          props.notes.map((data) => (
            <div
              key={data._id}
              className="noteBlock"
              style={{ backgroundColor: data.color }}
            >
              <div className="inputBlock" onClick={(e) => dialogOpen(e, data)}>
                <Typography className="textTitle" >
                  {data.title}
                </Typography>
                <Typography className="noteText">
                  {data.description}
                </Typography>
                <Typography  className="noteText">
                  {data.label}
                </Typography>
              </div>
              <div className="optionContainer">
                <div
                  onMouseEnter={(e) => {
                    storeOption(e, data);
                    setClr(clr);
                  }}
                  onMouseOver={setEdit(true)}
                  className="noteOption"
                >
                  <NoteOptions
                    setDelete={setDelete}
                    setColor={clr}
                    setClr={setClr}
                    editId={data._id}
                    noteDetail={noteData}
                    setEdited={edit}
                    getall={props.getall}
                    labelDetail={noteLabel}
                  />
                  
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="mainContent">
      <div className="displayNotes">
        <Note />
      </div>
      <div>
        <Dialog open={open} onClose={dialogClose}>
          <AddNote
            setEdited={edit}
            dialogOff={dialogClose}
            getall={props.getall}
            editOpen={open}
            noteDetail={noteData}
            editColor={clr}
            labelDetail={noteLabel}
          />
        </Dialog>
      </div>
    </div>
  );
  
  
}