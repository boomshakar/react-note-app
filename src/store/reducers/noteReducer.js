import { toast } from "react-toastify";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_NOTES":
      return action.notes.data;
    case "ADD_NOTE":
      toast.success("A note was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.note.data, ...state];
    case "UPDATE_NOTE":
      toast.success("A note was updated...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((note) =>
        note._id === action.note.data._id ? action.note.data : note
      );
    case "CHECK_NOTE":
      toast.success("A note status was changed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((note) =>
        note._id === action.note.data._id ? action.note.data : note
      );
    case "DELETE_NOTE":
      toast.success("A note was DELETED...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.filter((note) => note._id !== action.id);
    default:
      return state;
  }
};
export default noteReducer;
