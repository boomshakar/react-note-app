import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink as Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/action/authActions";

const useStyles = makeStyles({
  linkStyle: {
    color: "#eeeeee",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
  },
  linkStyleMobile: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
  },
  drawerBg: {
    background: "#00adb5",
    color: "#eeeeee",
    height: "100vh",
    width: "30vw",
  },
  listSpacing: {
    margin: "1rem auto",
    padding: "1rem",
  },
});

const DrawerComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);

  const auth = useSelector((state) => state.auth);
  const handleSignOut = () => {
    //signOut User
    dispatch(signOut());
    history.push("/signin");
  };
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className={classes.drawerBg}>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            className={classes.listSpacing}
          >
            <ListItemText>
              <Link to="/" className={classes.linkStyle}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          {auth._id ? (
            <>
              <Typography
                variant="subtitle2"
                className={classes.root.classes.linkStyle}
              >
                Logged in as {auth.name}
              </Typography>

              <ListItem className={classes.listSpacing}>
                <ListItemText className={classes.linkStyle}>
                  <Button
                    onClick={() => {
                      handleSignOut();
                      setOpenDrawer(false);
                    }}
                    color="inherit"
                  >
                    SignOut
                  </Button>
                </ListItemText>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem
                onClick={() => setOpenDrawer(false)}
                className={classes.listSpacing}
              >
                <ListItemText>
                  <Link to="/signin" className={classes.linkStyle}>
                    SignIn
                  </Link>
                </ListItemText>
              </ListItem>

              <ListItem
                onClick={() => setOpenDrawer(false)}
                className={classes.listSpacing}
              >
                <ListItemText>
                  <Link to="/signup" className={classes.linkStyle}>
                    <div>SignUp</div>
                  </Link>
                </ListItemText>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};
export default DrawerComponent;
