/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddAlertIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import RestoreFromTrashRoundedIcon from "@material-ui/icons/RestoreFromTrashRounded";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Services from "../../Services/NotesServices.js";
import "./NoteOptions.scss";
//const service = new Services();

const useStyles = makeStyles((theme) => ({
  optionButton: {
    width: "100%",
  },
  //   colorPaper: {
  //     marginLeft: theme.spacing(5),
  //   },
  button: {
    padding: "6px",
  },
  colorMenu: {
    width: "130px",
    height: "90px",
    display: "flex",
    flexFlow: " column wrap",
  },
  colorButton: {
    margin: "2px",
    width: "5px",
    height: "5px",
    "&:hover": {
      border: "black 2px solid",
    },
  },

  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function NoteOptions(props) {
  const classes = useStyles();
  const [open] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [noteId] = React.useState(props.editId);
  //const [edit, setEdit] = React.useState(props.setEdited);
  const [archive] = React.useState(props.archive);
  const [trash] = React.useState(props.trash);

  

  const deleteHandleOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const deletesHandleClose = () => {
    setAnchorE2(null);
  };


  const deleted = () => {
    let data = {
      notesId: [noteId],
    };
    console.log("dlt", data);
    console.log("dlted", noteId);
    Services.deleteForever(data)
      .then((data) => {
        console.log("Note deleted " + data);
        props.getall();
      })
      .catch((err) => {
        console.log("Error while deleting" + err);
      });
  };


  const archiveNote = () => {};

  const restore = () => {};

  const unArchiveNote = () => {};

  const ColorBlock = () => {

  };

  return (
    <div className={classes.optionButton}>
      <div>
        {trash ? (
          <div>
            {/* <IconButton className={classes.button}>
              <DeleteForeverRoundedIcon onClick={deleted}/>
            </IconButton> */}
            <IconButton className={classes.button}>
              <RestoreFromTrashRoundedIcon onClick={restore} />
            </IconButton>
          </div>
        ) : (
          <div className="optionfield">
            <IconButton className={classes.button}>
              <AddAlertIcon />
            </IconButton>
            <IconButton className={classes.button}>
              <PersonAddIcon />
            </IconButton>
            <IconButton
              //   onMouseOver={colorsHandleClick}
              className={classes.button}
            >
              <ColorLensOutlinedIcon />
            </IconButton>
            <IconButton className={classes.button}>
              <ImageOutlinedIcon />
            </IconButton>
            <IconButton className={classes.button}>
              {archive ? (
                <PublishRoundedIcon onClick={unArchiveNote} />
              ) : (
                <SystemUpdateAltOutlinedIcon onClick={archiveNote} />
              )}
            </IconButton>
            <IconButton className={classes.button} onClick={deleteHandleOpen}>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        )}
      </div>
      <div
        className={classes.colorWindow}
        style={{ display: open ? "block" : "none" }}
        // onClick={colorsHandleClose}
      >
        <Paper open={Boolean(open)}>
          <Menu
            open={Boolean(open)}
            className={classes.colorPaper}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
          >
            <ColorBlock className="colorBlock" />
          </Menu>
        </Paper>
      </div>
      <div>
        <Paper>
          <Menu
            className={classes.settingMenu}
            anchorEl={anchorE2}
            open={Boolean(anchorE2)}
            onClose={deletesHandleClose}
          >
            <MenuItem onClick={deleted}>Delete</MenuItem>
          </Menu>
        </Paper>
      </div>
    </div>
  );
}