import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Fab, Zoom } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "./AddNote.css";

import { addNote, updateNote } from "../../store/action/noteActions";

const useStyles = makeStyles({
  formFieldStyle: {
    marginBottom: "10px",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#00adb5 !important",
  },
});

const AddNote = ({ note, setNote }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputClick, setInputClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (note._id) {
      const id = note._id;
      const updatedNote = {
        name: note.name,
        noteBody: note.noteBody,
        isComplete: note.isComplete,
        date: note.date,
        author: note.author,
        uid: note.uid,
      };
      dispatch(updateNote(updatedNote, id));
    } else {
      const newNote = {
        ...note,
        date: new Date(),
      };
      dispatch(addNote(newNote));
    }

    setNote({
      name: "",
      noteBody: "",
      isComplete: false,
    });
  };
  const handleInputClickExpand = () => {
    setInputClick(!inputClick);
  };
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} method="post">
        <TextField
          id="enter-note"
          label="Title"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
          InputLabelProps={{
            style: { color: "#a4a7ac" },
          }}
          fullWidth
          variant="outlined"
          value={note.name}
          style={inputClick ? { display: "block" } : { display: "none" }}
          onChange={(e) => setNote({ ...note, name: e.target.value })}
          className={classes.formFieldStyle}
        />
        <TextField
          id="enter-note"
          label="Enter Note"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
          InputLabelProps={{
            style: { color: "#a4a7ac" },
          }}
          fullWidth
          variant="outlined"
          value={note.noteBody}
          onChange={(e) => setNote({ ...note, noteBody: e.target.value })}
          onClick={handleInputClickExpand}
          multiline
          minRows={inputClick ? 3 : 1}
          className={classes.formFieldStyle}
        />

        <Zoom
          in={inputClick && true}
          timeout={{ enter: 500, exit: 500 }}
          unmountOnExit
        >
          <Fab variant="circular" size="small" type="submit">
            <Add />
          </Fab>
        </Zoom>
      </form>
    </>
  );
};

export default AddNote;
