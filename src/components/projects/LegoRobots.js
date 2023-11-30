import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const name = "legorobots";
const title = "LEGO Robots";
const path = "legorobots";
const coverImage = "ballthrower.jpg";
const description = "A collection of LEGO robotics projects";
const tags = {
  software: true,
  hardware: true,
};
const technology = ["LEGO Mindstorms", "Robotics", "Python"];
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
            I never played with LEGOs as a kid, so instead I played with them in
            college. These are a series of projects from a few different LEGO
            robotics classes I took in college (EN-1, ME-34).
            <br />
            <br />
            These include a ball throwing robot, a driving line-following robot,
            a walking line-following robot, a sumo wrestling robot, and shape
            detection robot.
          </div>
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/legorobots/ballthrower.jpg`}
            alt=""
          />
        </Grid>
      </Grid>
      <Images
        images={[
          `${imagePath}/legorobots/linesniffer.jpeg`,
          `${imagePath}/legorobots/quadpod.jpeg`,
        ]}
      />
      <Images
        space
        images={[
          `${imagePath}/legorobots/sumobot.png`,
          `${imagePath}/legorobots/imagescanner.jpg`,
        ]}
      />
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
