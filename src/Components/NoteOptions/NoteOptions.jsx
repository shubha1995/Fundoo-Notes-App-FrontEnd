/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddAlertIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
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

const useStyles = makeStyles((theme) => ({
  optionButton: {
    width: "100%",
  },
  colorPaper: {
    marginLeft: theme.spacing(5),
  },
  button: {
    padding: "6px",
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

  const colors = [
    { color: "#fafafa" },
    { color: "#ef9a9a" },
    { color: "#ffcc80" },
    { color: "#fff59d" },
    { color: "#dcedc8" },
    { color: "#b2dfdb" },
    { color: "#e0f7fa" },
    { color: "#4fc3f7" },
    { color: "#b39ddb" },
    { color: "#f8bbd0" },
    { color: "#a1887f" },
    { color: "#cfd8dc" },
  ];

  const deleteHandleOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const deletesHandleClose = () => {
    setAnchorE2(null);
  };

  const deleted = () => {
    let data = {
      id: [noteId],
    };
    console.log("dlt", data);
    console.log("deleted", noteId);
    Services.deleteForever(data)
      .then((data) => {
        console.log("Note deleted " + data);
        props.getall();
      })
      .catch((err) => {
        console.log("Error while deleting" + err);
      });
  };

  const colorsHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("setE1 :: ", event.currentTarget);
  };

  const colorsHandleClose = () => {
    setAnchorEl(null);
    console.log("setAnchorEl ::", setAnchorEl(null));
  };

  const passColor = (e, colr) => {};

  const restore = () => {};

  const ColorBlock = () => {
    return (
      <div className="colorMenu" onClick={colorsHandleClose}>
        {colors.map((color) => (
          <IconButton
            className={classes.colorButton}
            onClick={(e) => passColor(e, color.color)}
            style={{ backgroundColor: color.color }}
          ></IconButton>
        ))}
      </div>
    );
  };

  return (
    <div className={classes.optionButton}>
      <div>
        {trash ? (
          <div>
            <IconButton className={classes.button}>
              <DeleteForeverRoundedIcon onClick={deleted} />
            </IconButton>
            <IconButton className={classes.button}>
              <RestoreFromTrashRoundedIcon onClick={restore} />
            </IconButton>
          </div>
        ) : (
          <div className="optionfield">
            {/* <IconButton className={classes.button}>
              <AddAlertIcon />
            </IconButton>
            <IconButton className={classes.button}>
              <PersonAddIcon />
            </IconButton> */}
            <IconButton onClick={colorsHandleClick} className={classes.button}>
              <ColorLensOutlinedIcon />
            </IconButton>
            {/* <IconButton className={classes.button}>
              <ImageOutlinedIcon />
            </IconButton> */}

            <IconButton className={classes.button} onClick={deleteHandleOpen}>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        )}
      </div>
      <div
        className={classes.colorWindow}
        style={{ display: open ? "block" : "none" }}
        onClick={colorsHandleClose}
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