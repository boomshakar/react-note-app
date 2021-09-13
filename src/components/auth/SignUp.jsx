import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { signUp } from "../../store/action/authActions";

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
const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
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
        <Typography variant="h5">signUp</Typography>
        <TextField
          id="enter-name"
          className={classes.spacing}
          label="Enter Name"
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
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
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
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.spacing}
        >
          SignUp
        </Button>
      </form>
    </>
  );
};

export default SignUp;
