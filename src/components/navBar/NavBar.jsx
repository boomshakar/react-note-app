import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  useMediaQuery,
  useTheme,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink as Link, useHistory } from "react-router-dom";
import { signOut } from "../../store/action/authActions";
import DrawerComponent from "./Drawer";
import "./NavBar.css";

const useStyles = makeStyles({
  linkStyle: {
    color: "white",
    textDecoration: "none",
  },
  root: {
    flexGrow: 1,
  },
});
const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  // to see how we signed in
  // const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);
  // console.log(state);

  const handleSignOut = () => {
    //signOut User
    dispatch(signOut());
    history.push("/signin");
  };
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar position="sticky">
        <CssBaseline />
        <Toolbar>
          {/* ToolBar displays the div as inline block & row */}
          <Typography variant="h4" className={classes.root}>
            <Link to="/" className={classes.linkStyle}>
              noteKeeper
            </Link>
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <>
              {auth._id ? (
                <>
                  <Typography variant="subtitle2" className={classes.root}>
                    Logged in as {auth.name}
                  </Typography>
                  <Button onClick={() => handleSignOut()} color="inherit">
                    SignOut
                  </Button>
                </>
              ) : (
                <>
                  <Button color="inherit">
                    <Link to="/signin" className={classes.linkStyle}>
                      SignIn
                    </Link>
                  </Button>
                  <Button color="inherit">
                    <Link to="/signup" className={classes.linkStyle}>
                      SignUp
                    </Link>
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
