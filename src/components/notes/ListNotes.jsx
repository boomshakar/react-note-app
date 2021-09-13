import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Note from "./Note";
// acton creator
import { getNotes } from "../../store/action/noteActions";

const useStyles = makeStyles({
  noteStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const ListNotes = ({ setNote }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);
  return (
    <>
      <div className={classes.noteStyle}>
        <Typography variant="h5">
          {notes.length > 0 ? "My Notes" : "No Note(s) Yet"}
        </Typography>
        {notes &&
          notes.map((note) => {
            return <Note note={note} key={note._id} setNote={setNote} />;
          })}
      </div>
    </>
  );
};

export default ListNotes;
