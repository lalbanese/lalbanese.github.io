import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const name = "clock";
const title = "LED Clock";
const path = "clock";
const coverImage = "clock_1";
const description = "A fun clock project from my senior year of undergrad";
const tags = {
  software: true,
  hardware: true,
};
const technology = ["Lasercutting", "RP2040", "Solidworks"];
const data = {};

const smallScreen = window.screen.width < 650;

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    marginTop: "3vh",
  },
  image: {
    width: "100%",
  },
  bottomImages: {
    width: "100%",
    maxHeight: "95%",
  },
  text: {
    width: "90%",
  },
}));

export default function Component() {
  const classes = useStyles();
  const imageSpace = 6;
  const gridSize = smallScreen ? 12 : imageSpace;

  return (
    <ProjectTemplate title={title} data={data}>
      <Grid container spacing={1} className={classes.grid}>
        <Grid item xs={gridSize}>
          <div className={classes.text}>
            In college I had easy access to a laser cutter and a tight budget
            for gifts, so I made my dad an LED clock for his birthday. The
            entire structure is laser cut, including the living hinge holding
            the front and back panels together. The WS-2811 LEDs are programmed
            to behave as the second hand with a QTPy (one of my favorite
            Adafruit dev boards) on a protoboard.
          </div>
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/clock/clock_1.JPG`}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.grid}>
        <Grid item xs={gridSize}>
          <img
            className={classes.bottomImages}
            src={`${imagePath}/clock/clock_3.JPG`}
            alt=""
          />
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.bottomImages}
            src={`${imagePath}/clock/clock_2.JPG`}
            alt=""
          />
        </Grid>
      </Grid>
    </ProjectTemplate>
  );
}

export {
  name,
  Component,
  title,
  path,
  coverImage,
  description,
  technology,
  tags,
  data,
};
