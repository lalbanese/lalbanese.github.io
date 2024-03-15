import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const name = "h2oksystem";
const title = "H2Ok Innovations Products";
const path = "h2ok";
const coverImage = "h2ok.jpg";
const description =
  "Since starting in 2021, I've designed multiple versions of the electronics systems at H2Ok, including the industrial sensors and gateway that make up the core product line.";
const tags = {
};
const technology = [""];
const data = {};
const linkOverride = "https://www.h2okinnovations.com/";

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

export {
  name,
  title,
  path,
  coverImage,
  description,
  technology,
  tags,
  data,
  linkOverride,
};
