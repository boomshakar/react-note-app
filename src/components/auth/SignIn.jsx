import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { signIn } from "../../store/action/authActions";

import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formStyle: {
    margin: "5rem 1rem auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#00adb5 !important",
  },
  spacing: {
    marginTop: "20px",
  },
});
const SignIn = () => {
  const classes = useStyles();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <>
      <form
        autoComplete="off"
        noValidate
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">signIn</Typography>
        <TextField
          id="enter-email"
          className={classes.spacing}
          label="Email"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
          InputLabelProps={{
            style: { color: "#a4a7ac" },
          }}
          variant="outlined"
          fullWidth
          type="email"
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <TextField
          id="enter-password"
          className={classes.spacing}
          label="Password"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
          InputLabelProps={{
            style: { color: "#a4a7ac" },
          }}
          variant="outlined"
          fullWidth
          type="password"
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.spacing}
        >
          SignIn
        </Button>
      </form>
    </>
  );
};

export default SignIn;
