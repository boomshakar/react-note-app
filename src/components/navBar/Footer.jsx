import { AppBar, Typography, Toolbar, CssBaseline } from "@material-ui/core";
import { NavLink as Link } from "react-router-dom";
import "./Footer.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  fontSize: {
    fontSize: "10",
    color: "#eeeeee",
  },
});
const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();
  return (
    <AppBar position="relative" className="mainFooterDivAppBar">
      <CssBaseline />
      <Toolbar className="footerDiv">
        <Typography
          variant="subtitle2"
          color="inherit"
          className={classes.fontSize}
        >
          Made with 💖 by
          <Link to="https://boomshakar.netlify.app/" className="footerDivLink">
            &nbsp;{`<.boomShakaR!`}&nbsp;&nbsp;
          </Link>
        </Typography>
        <Typography variant="subtitle2" color="inherit">
          © {currentYear}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
