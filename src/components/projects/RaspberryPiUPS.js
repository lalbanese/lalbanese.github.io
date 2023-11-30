import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const name = "rpiups";
const title = "Raspberry Pi Uninterruptible Power Supply";
const path = "rpiups";
const coverImage = "rpiups.png";
const description =
  "An Uninterruptible Power Supply for a Raspberry Pi 4 to replace the sub-optimal off-the-shelf options";
const tags = {
  // software: true,
  // hardware: true,
};
const technology = ["KiCAD", "Raspberry Pi"];
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
            Of the many PCBs I've designed at H2Ok, this is one that didn't get
            to production (and not covered by my NDA*), meaning it makes it on
            the website! This is a test of an Uninterrupted Power Supply system.
            <br />
            <br />
            To test the system, I have it acting as a UPS for a Raspberry Pi 4
            (hence the 40 pin connector). It has an integrated battery, charger,
            regulators, etc. From some testing, it's a pretty big improvement
            over a current off the shelf UPS, thermally and performance-wise.
            <br />
            <br />
            *If you want to hear more about my work at H2Ok that I can't show
            here, reach out to me!
          </div>
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/rpiups/rpiups.png`}
            alt=""
          />
          <img
            className={classes.image}
            src={`${imagePath}/rpiups/rpiups_2.png`}
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
