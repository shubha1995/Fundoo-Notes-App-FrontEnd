/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import AddAlertIcon from "@material-ui/icons/AddAlertOutlined";
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import RestoreFromTrashRoundedIcon from "@material-ui/icons/RestoreFromTrashRounded";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Services from "../../Services/NotesServices.js";
import "./NoteOptions.scss";

export default function NoteOptions(props) {
  const [open] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [edit, setEdit] = React.useState(props.setEdited);
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
      id: [props.noteDetail?._id],
    };
    Services.deleteForever(data)
      .then((data) => {
        props.getall();
      })
      .catch((err) => {
      });
  };

  const colorsHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const colorsHandleClose = () => {
    setAnchorEl(null);
  };

  const passColor = (e, colr) => {};



  const restore = () => {};

  const ColorBlock = () => {
    return (
      <div className="colorMenu" onClick={colorsHandleClose}>
        {colors.map((color) => (
          <IconButton
            onClick={(e) => passColor(e, color.color)}
            style={{ backgroundColor: color.color }}
          ></IconButton>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
        {trash ? (
          <div>
            <IconButton >
              <DeleteForeverRoundedIcon onClick={deleted} />
            </IconButton>
            <IconButton>
              <RestoreFromTrashRoundedIcon onClick={restore} />
            </IconButton>
          </div>
        ) : (
          <div className="optionfield">
            <IconButton>
              <AddAlertIcon />
            </IconButton>
            <IconButton>
              <PersonAddIcon />
            </IconButton>
            <IconButton onClick={colorsHandleClick}>
              <ColorLensOutlinedIcon />
            </IconButton>
            <IconButton>
              <ArchiveOutlinedIcon/>
            </IconButton>
            

            <IconButton onClick={deleteHandleOpen}>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        )}
      </div>
      <div
        style={{ display: open ? "block" : "none" }}
        onClick={colorsHandleClose}
      >
        <Paper open={Boolean(open)}>
          <Menu
            open={Boolean(open)}
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