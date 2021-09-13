import { useDispatch } from "react-redux";

import {
  Typography,
  Button,
  ButtonGroup,
  useMediaQuery,
  useTheme,
  Divider,
} from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

import { checkNote, deleteNote } from "../../store/action/noteActions";

const useStyles = makeStyles({
  noteStyle: {
    margin: "2rem auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
  },
  noteStyleSub: {
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    margin: "2rem auto",
    display: "flex",
    justifyContent: "space-between",
  },
  gray: {
    color: "#8f8f8f",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
  noteInfo: {
    margin: "0.5rem auto",
  },
});

const Note = ({ note, setNote }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUpdateClick = () => {
    setNote(note);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkNote(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isMobile ? (
        <>
          <div className={classes.noteStyle}>
            <div>
              <ButtonGroup
                size="small"
                aria-label="outlined primary butto group"
              >
                <Button onClick={() => handleCheck(note._id)}>
                  {note.isComplete ? (
                    <CheckCircle
                      color="action"
                      className={classes.isComplete}
                    />
                  ) : (
                    <CheckCircle color="action" />
                  )}
                </Button>
                <Button>
                  <Create
                    style={{ color: "#00adb5" }}
                    onClick={() => handleUpdateClick()}
                  />
                </Button>
                <Button>
                  <Delete
                    color="secondary"
                    onClick={() => handleDelete(note._id)}
                  />
                </Button>
              </ButtonGroup>
            </div>
            <div>
              {note.isComplete ? (
                <>
                  <Typography variant="h6" className={classes.checked}>
                    {note.name}
                  </Typography>
                  <Divider variant="middle" className={classes.noteInfo} />
                  <Typography variant="subtitle2" className={classes.checked}>
                    {note.noteBody}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="h6">{note.name}</Typography>
                  <Divider variant="middle" className={classes.noteInfo} />
                  <Typography variant="subtitle2">{note.noteBody}</Typography>
                </>
              )}
              <Divider variant="middle" className={classes.noteInfo} />
              <div>
                <Typography variant="body2" className={classes.gray}>
                  Author: {note.author}
                </Typography>
                <Typography variant="body2" className={classes.gray}>
                  Added: {moment(note.date).fromNow()}
                </Typography>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.noteStyleSub}>
            <div>
              {note.isComplete ? (
                <>
                  <Typography variant="h6" className={classes.checked}>
                    {note.name}
                  </Typography>
                  <Divider variant="middle" className={classes.noteInfo} />
                  <Typography variant="subtitle2" className={classes.checked}>
                    {note.noteBody}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="h6">{note.name}</Typography>
                  <Divider variant="middle" className={classes.noteInfo} />
                  <Typography variant="subtitle2">{note.noteBody}</Typography>
                </>
              )}
              <Divider variant="middle" className={classes.noteInfo} />
              <Typography variant="body2" className={classes.gray}>
                Author: {note.author}
              </Typography>
              <Typography variant="body2" className={classes.gray}>
                Added: {moment(note.date).fromNow()}
              </Typography>
            </div>
            <div>
              <ButtonGroup
                size="small"
                aria-label="outlined primary butto group"
              >
                <Button onClick={() => handleCheck(note._id)}>
                  {note.isComplete ? (
                    <CheckCircle
                      color="action"
                      className={classes.isComplete}
                    />
                  ) : (
                    <CheckCircle color="action" />
                  )}
                </Button>
                <Button>
                  <Create
                    style={{ color: "#00adb5" }}
                    onClick={() => handleUpdateClick()}
                  />
                </Button>
                <Button>
                  <Delete
                    color="secondary"
                    onClick={() => handleDelete(note._id)}
                  />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Note;
