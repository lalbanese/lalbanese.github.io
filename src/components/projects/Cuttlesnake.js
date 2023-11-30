import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const name = "cuttlesnake";
const title = "CuttleSnake Crawling Robot";
const path = "cuttlesnake";
const coverImage = "snake.jpeg";
const description =
  "A crawling robot project for my Advanced Robotics course in senior year of undergrad. This robot demonstrates a novel form of locomotion.";
const tags = {
  // software: true,
  // hardware: true,
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
            This robot was made for the Crawling Robot project of Tufts ME-134
            (Advanced Robotics) in the Fall of 2020. The prompt was to create a
            robot that moved without using wheels as the drive mechanism - a
            crawling robot.
            <br />
            <br />
            We designed the robot with inspiration from the cuttlefish and the
            snake, hence the name "CuttleSnake". A DC motor drives the corkscrew
            mechanism that creates a wave motion through the series of linkages.
            A Raspberry Pi Zero controls the drive motor and a servo on the
            front for steering. Note the LEGO wheels on the front solve a
            traction issue we had with steering, but don't actually spin. The
            CuttleSnake is a personal favorite project of mine, and I look
            forward to the day I have time to build a V2.
          </div>
        </Grid>
        <Grid item xs={gridSize}>
          <iframe
            width="100%"
            height="380"
            src="https://www.youtube.com/embed/3KBWoFqGOu0?si=IXo56euABTp7gaCZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <img
            className={classes.image}
            src={`${imagePath}/cuttlesnake/snake.jpeg`}
            alt=""
          />
        </Grid>
      </Grid>
      <Images
        space
        images={[
          `${imagePath}/cuttlesnake/snake_2.jpg`,
          `${imagePath}/cuttlesnake/snake_3.jpg`,
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
