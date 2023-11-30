import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const name = "balancing";
const title = "Balancing Robot";
const path = "balancing";
const coverImage = "balancing_1.JPG";
const description =
  "A balancing robotics project for my Advanced Robotics course in senior year of undergrad";
const tags = {
  software: true,
  hardware: true,
};
const technology = ["Raspberry Pi", "Python", "Solidworks"];
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
            One of my first attempts at a mathematically designed PID
            controller, a balancing* robot from Tufts ME-134 (Advanced Robotics)
            in Fall 2020. An IMU calculates absolute roll, pitch, and yaw to
            correct wheel speed and direction, keeping the robot balanced. Yes,
            it does look like Mo the cleaning robot from Wall-E.
            <br />
            <br />
            *Note, the term “balance” is relative.
          </div>
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/balancing/balancing_2.JPG`}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.grid}>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/balancing/balancing_1.JPG`}
            alt=""
          />
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/balancing/balancing_3.JPG`}
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
