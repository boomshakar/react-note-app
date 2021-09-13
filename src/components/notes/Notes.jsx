import React, { useState } from "react";
import AddNote from "./AddNote";
import ListNotes from "./ListNotes";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

const Notes = () => {
  const auth = useSelector((state) => state.auth);
  const [note, setNote] = useState({
    name: "",
    noteBody: "",
    isComplete: false,
  });
  if (!auth._id) return <Redirect to="/signin" />;
  return (
    <>
      <AddNote note={note} setNote={setNote} />
      <ListNotes setNote={setNote} />
    </>
  );
};

export default Notes;
