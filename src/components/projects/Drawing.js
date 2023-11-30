import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const name = "drawing_robot";
const title = "Drawing Robot";
const path = "drawing_robot";
const coverImage = "drawing_1";
const description =
  "A drawing robot project for my Advanced Robotics course in senior year of undergrad";
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
            This robot is from the Tufts ME-134 (Advanced Robotics) course in
            Fall 2020. The assignment was to build an arm to write your
            initials. We designed a closed loop kinematic chain, and
            geometrically calculated the inverse kinematics to translate the
            coordinates of the end effector holding the pen to the servo
            positions. The servos we used weren’t the most precise, so the
            letters are a bit wobbly.
            <br />
            <br />
            One could say it's more realistic.
          </div>
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/drawing_robot/drawing_1.jpg`}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.grid}>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/drawing_robot/drawing_3.jpg`}
            alt=""
          />
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/drawing_robot/drawing_cad.jpg`}
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
