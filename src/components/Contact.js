import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fontMono, fontSans, orange, llslate, slate } from "./PageStyles";
import { StyledButton } from "./Common";

const thinScreen = window.screen.width < 750;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "25vh",
    width: (props) => (props.thinScreen ? "100%" : "75%"),
    marginBottom: "35vh",
  },
  sectionTitle: {
    textAlign: "left",
    fontFamily: fontMono,
    color: orange,
    fontSize: "2em",
  },
  // subtitle: {
  //   textAlign: "center",
  //   fontFamily: fontSans,
  //   color: llslate,
  //   fontSize: "3em",
  //   fontWeight: 600,
  //   marginTop: "2vh",
  //   letterSpacing: "1px",
  // },
  info: {
    color: slate,
    fontSize: (props) => (props.thinScreen ? "1.5em" : "1.5em"),
    // width: (props) => (props.thinScreen ? "100%" : "60%"),
    margin: "auto",
    textAlign: "left",
    fontFamily: fontSans,
    marginTop: "2vh",
  },
  centerButton: {
    textAlign: "center",
    marginTop: (props) => (props.thinScreen ? "8vh" : "4vh"),
  },
  outline: {
    borderColor: orange,
  },
  button: {
    fontSize: "1em",
    padding: "12px 20px 12px 20px",
  },
  footer: {
    textAlign: "center",
    marginTop: "25vh",
    marginBottom: "3vh",
    fontFamily: fontMono,
    color: slate,
    fontSize: "0.8em",
    transition: "0.3s",
    "&:hover": {
      color: orange,
      cursor: "pointer",
    },
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
}));

export default function Contact(props) {
  const classes = useStyles({ thinScreen });

  return (
    <div className={classes.root} id="contact">
      <div className={classes.sectionTitle}>03. Get In Touch</div>
      <div className={classes.info}>
        Feel free to reach out and say hello! My current work with H2Ok
        Innovations is largely under NDA, so contact me for more information.
        I'm always looking for new projects, and would love to collaborate on
        something cool.
      </div>
      <div className={classes.centerButton}>
        <a
          href="mailto:libby@albanese.com"
          rel="noopener noreferrer"
          className={classes.a}
        >
          <StyledButton
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
          >
            Say Hello
          </StyledButton>
        </a>
      </div>
    </div>
  );
}
