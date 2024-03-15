import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HashLink } from "react-router-hash-link";
import { fontMono, fontSans, orange, llslate, slate } from "./PageStyles";
import { StyledButton, StyledLink } from "./Common";

const offsetTop = 18;
const smallScreen = window.screen.height < 850;
const thinScreen = window.screen.width < 950;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: (props) =>
      props.smallScreen ? `${offsetTop / 3}vh` : `${offsetTop}vh`,
    width: (props) => (props.smallScreen ? "95%" : "80%"),
    margin: "auto",
  },
  hello: {
    fontFamily: fontMono,
    color: orange,
    fontSize: "1em",
    marginBottom: "16px",
  },
  intro: {
    fontWeight: "600",
    letterSpacing: "1px",
    fontFamily: fontSans,
    fontSize: (props) => (props.smallScreen ? "2.5em" : "5em"),
  },
  name: {
    color: llslate,
    marginBottom: "24px",
    // borderBottom: `1px solid ${slate}`,
  },
  build: {
    color: orange,
    fontSize: "0.75em",
    marginBottom: "16px",
    fontFamily: fontMono,
    fontWeight: "500",
    fontSize: "0.5em",
  },
  about: {
    fontFamily: fontSans,
    fontSize: (props) => (props.thinScreen ? "1.1em" : "1.2em"),
    marginTop: (props) => (props.thinScreen ? "16px" : 0),
    color: slate,
    maxWidth: (props) => (props.smallScreen ? "90%" : "50%"),
  },
  buttonGroup: {
    marginTop: (props) => (props.smallScreen ? "32px" : "64px"),
  },
  outline: {
    borderColor: orange,
  },
  button: {
    float: "none",
    fontSize: (props) => (props.thinScreen ? "0.8em" : "1em"),
    marginRight: "2em",
    padding: (props) =>
      props.thinScreen ? "6px 10px 6px 10px" : "12px 20px 12px 20px",
  },
}));

export default function Hero(props) {
  const classes = useStyles({ smallScreen, thinScreen });

  useEffect(() => {
    document.title = "Home | Libby Albanese";
  });

  return (
    <div className={classes.root}>
      <div className={classes.hello}>Hi, my name is</div>
      <div className={classes.intro}>
        <div className={classes.name}>Libby Albanese</div>
        <div className={classes.build}>I design electronics.</div>
      </div>

      <div className={classes.about}>
        I'm a Boston-based hardware engineer designing PCBs, testing prototypes,
        and integrating mechanical and electrical systems. Currently, I'm an
        engineer at{" "}
        <StyledLink
          href="https://www.h2okinnovations.com"
          text="H2Ok Innovations"
        />{" "}
        doing full stack product design of electro-mechanical systems.
      </div>

      <div className={classes.buttonGroup}>
        <HashLink to="/#contact" style={{ textDecoration: "none" }}>
          <StyledButton
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
          >
            Get In Touch
          </StyledButton>
        </HashLink>

        <HashLink to="/#projects" style={{ textDecoration: "none" }}>
          <StyledButton
            className={classes.button}
            classes={{ outlined: classes.outline }}
            variant="outlined"
          >
            See My Work
          </StyledButton>
        </HashLink>
      </div>
    </div>
  );
}
