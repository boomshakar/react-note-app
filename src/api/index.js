// export const url = "http://localhost:5050/api";
export const url = "https://boom-note-app.herokuapp.com/";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
