import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const name = "waterreminder";
const title = "Water Reminder";
const path = "waterreminder";
const coverImage = "waterreminder.JPG";
const description =
  "A water bottle attachment for reminding you to drink water";
const tags = {
  software: true,
  hardware: true,
};
const technology = ["RP2040", "Solidworks"];
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
            This project is from the Tufts ME-193 (Microcontrollers) class in
            Spring 2021 - “make something useful”. I often forget to drink
            water, so I build a water reminder.
            <br />
            <br />
            An accelerometer logs the last time the water bottle was tilted
            enough to get water out of. If an hour has passed without any
            tilting, the LED on the front will light up. The slot-together
            casing was a blast to design and, of course, it’s pink.
          </div>
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/waterreminder/picture2.JPG`}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.grid}>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/waterreminder/waterreminder.jpg`}
            alt=""
          />
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/waterreminder/samepicturebutbigger.jpg`}
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
