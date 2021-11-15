/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import NoteOptions from "../NoteOptions/NoteOptions";
import Services from "../../Services/NotesServices.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddNotes.scss";

const useStyles = makeStyles((theme) => ({
  titleInput: {
    padding: "10px 15px",
    width: "70%",
  },
  noteInput: {
    padding: "10px 15px",
  },
  closeNotes: {
    padding: "10px 10px 10px 10px",
    fontSize: "17px",
    justifySelf: "flex-end",
    fontFamily: "Google Sans ,Roboto,Arial,sans-serif",
    borderRadius: "5px",
    cursor: "pointer",
  },
}));

export default function AddNote(props) {
  const classes = useStyles();
  var [showTitle, titleDisplay] = React.useState(props.editOpen);
  var [title, setTitle] = React.useState(props.editTitle);
  var [note, setNote] = React.useState(props.editDisc);
  const [edit] = React.useState(props.setEdited);
  const [clr, setClr] = React.useState(props.editColor);
  const [archive] = React.useState(props.archive);
  const [trash] = React.useState(props.trash);
  const [takeNote] = React.useState(true);

  const clickedNote = () => {
    titleDisplay(true);
  };

  const closeNote = () => {
    console.log("onclosedcalled");
    const formval = {
      title: title,
      description: note,
    };
    Services.addNote(formval)
      .then((data) => {
        toast.success("Notes created");
        console.log("Add Notes: " + data);
        props.getall();
      })
      .catch((err) => {
        toast.error("Note not created");
      });


    if (title === undefined && note === undefined) {
      console.log("Please Enter Data");
      setClr("#fafafa");
      titleDisplay(false);
      return null;
    }
  };

  return (
    <div
      className="addNotesMain"
      onClickAway={closeNote}
      style={{ backgroundColor: clr }}
    >
      <div className="notesField" onClick={clickedNote}>
        <div
          className="addNoteField"
          style={{ display: showTitle ? "block" : "none" }}
        >
          <div className="titleInput" className={classes.titleInput}>
            <InputBase
              className={classes.input}
              placeholder="Title"
              value={title}
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div class="simpleNoteShow">
          <div className="noteInput">
            <InputBase
              className={classes.input}
              placeholder="Take a note..."
              value={note}
              fullWidth
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div style={{ display: showTitle ? "none" : "block" }}>
            <IconButton>
              <CheckBoxOutlinedIcon />
            </IconButton>
            <IconButton>
              <BrushOutlinedIcon />
            </IconButton>
            <IconButton>
              <ImageOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <ToastContainer />
      </div>
      <div
        className="addNoteField"
        style={{ display: showTitle ? "block" : "none" }}
      >
        <div className="addNoteOptions">
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
          {trash ? (
            " "
          ) : (
            <div className="closeNotes">
              {" "}
              <IconButton className={classes.closeNotes} onClick={closeNote}>
                CLOSE
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}