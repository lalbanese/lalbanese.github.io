import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { fontSans, slate } from "./PageStyles";
import { SectionHeader, StyledLink } from "./Common";

const smallScreen = window.screen.height < 850;
const thinScreen = window.screen.width < 950;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "50vh",
    width: (props) => (props.thinScreen ? "100%" : "75%"),
  },
  grid: {
    marginTop: "5vh",
  },
  gridItem: {
    minWidth: (props) => (props.thinScreen ? "100%" : "auto"),
  },
  about: {
    fontFamily: fontSans,
    fontSize: "1.2em",
    color: slate,
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    lineHeight: (props) => (props.thinScreen ? "1.2" : "1.6"),
  },
  imgWrapper: {
    // TODO: make this image prettier
    display: "block",
    position: "relative",
    width: (props) => (props.thinScreen ? "100%" : "auto"),
    // width: '100%',
    // borderRadius: '5px',
    // backgroundColor: orange,
    // "&:hover": {
    //   top: '15px',
    //   left: '15px',
    // },
    // "&::after": {
    //   content: '""',
    //   display: 'block',
    //   position: 'absolute',
    //   width: '100%',
    //   height: '100%',
    //   borderRadius: '5px',
    //   transition: '0.3s',
    // }
  },
  avatar: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",

    // display: 'inline-block',
    // position: 'relative',
    // "&::after": {
    //   content: '""',
    //   position: 'absolute',
    //   top: '-5%',
    //   left: '-15%',
    //   width: '100%',
    //   height: '100%',
    //   border: '4px solid red',
    // }
    // boxShadow: '2px 2px 2px 1px red',
  },
}));

export default function About(props) {
  const classes = useStyles({ smallScreen, thinScreen });

  return (
    <div className={classes.root} id="about">
      <SectionHeader number="1" text="About Me" />
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={8} className={classes.gridItem}>
          <div className={classes.about}>
            Hello! My name is Libby Albanese and I am a MechE turned EE. I
            specialize in PCB design and build end-to-end products for{" "}
            <StyledLink
              href="https://www.h2okinnovations.com"
              text="H2Ok Innovations"
            />
            .
            <br />
            <br />
            In my free time, I build robots and design embedded systems. My
            interests are in robotics, mechatronics, and bioinspired design. I
            also enjoy refereeing combat robot competitions at{" "}
            <StyledLink href="https://www.nhrl.io" text="NHRL" />. Previously
            I've worked at the{" "}
            <StyledLink href="https://nolop.org/" text="Nolop Makerspace" />
            &nbsp; and the{" "}
            <StyledLink
              href="https://matthewawoodward.wixsite.com/rlblab"
              text="RLB Lab"
            />{" "}
            at Tufts University.
          </div>
        </Grid>

        <Grid item xs={4} className={classes.gridItem}>
          <div className={classes.imgWrapper}>
            <img
              src="static/avatar.jpg"
              alt="Avatar"
              className={classes.avatar}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
