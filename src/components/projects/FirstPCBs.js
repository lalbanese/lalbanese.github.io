import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const name = "firstpcbs";
const title = "First PCBs";
const path = "firstpcbs";
const coverImage = "vreg_schem.png";
const description = "Some of my first ever PCBs";
const tags = {
  software: true,
  hardware: true,
};
const technology = ["KiCAD", "Soldering"];
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
            Here are a few of the first PCBs I ever designed and built. They are
            a breadboard power supply, and a Raspberry Pi Pico motor driver hat.
            And yes, they worked.
            <br />
            <br />
          </div>
          <img
            className={classes.image}
            src={`${imagePath}/firstpcbs/vreg_pcb.png`}
            alt=""
          />
        </Grid>
        <Grid item xs={gridSize}>
          <img
            className={classes.image}
            src={`${imagePath}/firstpcbs/vreg_schem.png`}
            alt=""
          />
        </Grid>
      </Grid>

      <Images
        space
        images={[
          `${imagePath}/firstpcbs/vreg_assem.jpg`,
          `${imagePath}/firstpcbs/motordrive_assembled.jpg`,
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
