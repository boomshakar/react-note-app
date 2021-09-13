import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Notes from "./components/notes/Notes";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/navBar/Footer";
import { loadUser } from "./store/action/authActions";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
    minHeight: "76vh",
    position: "relative",
  },
  contentMainStyle: {
    position: "relative",
    height: "100%",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <div>
          <ToastContainer />
          <Container maxWidth="md" className={classes.contentMainStyle}>
            <NavBar />
            <Container className={classes.contentStyle} maxWidth="sm">
              <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Notes} />
              </Switch>
            </Container>
            <Footer />
          </Container>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
