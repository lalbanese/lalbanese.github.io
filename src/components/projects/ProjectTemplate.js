import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { orange, fontMono, fontSans, lslate } from "../PageStyles";
import { Link } from "react-router-dom";
import Toolbar from "../Toolbar";
import { StyledButton } from "../Common";

const offsetLeft = 5;
const offsetTop = 3;
const smallScreen = window.screen.width < 650;

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "600",
    fontSize: "4em",
    position: "relative",
    left: `${offsetLeft}vw`,
    width: `${100 - 2 * offsetLeft}vw`,
    height: `${100 - 2 * offsetTop}vh`,
    top: `${offsetTop}vh`,
  },
  title: {
    color: orange,
    paddingBottom: "3vh",
    fontFamily: fontMono,
    fontSize: "0.6em",
  },
  children: {
    color: lslate,
    fontFamily: fontSans,
    maxWidth: "100%",
    fontSize: (props) => (props.smallScreen ? "0.35em" : "0.3em"),
    display: "block",
  },
  outline: {
    borderColor: orange,
  },
  link: {
    color: orange,
  },
  button: {
    float: "none",
    marginBottom: "2em",
    fontWeight: "600",
    fontSize: (props) => (props.smallScreen ? "0.3em" : "0.5em"),
    marginRight: "2em",
  },
  linkButton: {
    float: "none",
    marginLeft: (props) => (props.smallScreen ? `1vw` : "3vw"),
    fontWeight: "600",
    fontSize: (props) => (props.smallScreen ? "0.2em" : "0.4em"),
    marginRight: "1em",
  },
}));

export default function ProjectTemplate(props) {
  const classes = useStyles({ smallScreen });

  useEffect(() => {
    document.title = `${props.title} | Libby Albanese`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Toolbar />

      <div className={classes.root}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.children}>{props.children}</div>

        <br />

        <Link to="/" style={{ textDecoration: "none" }}>
          <StyledButton
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
          >
            &lt; Home
          </StyledButton>
        </Link>
      </div>
    </div>
  );
}
