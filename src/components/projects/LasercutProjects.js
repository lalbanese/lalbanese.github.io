import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const name = "lasercut";
const title = "Lasercutter Projects";
const path = "lasercut";
const coverImage = "coasters.JPG";
const description = "Some laser cutter projects I've done over the years";
const tags = {
  software: true,
  hardware: true,
};
const technology = ["Lasercutting", "Adobe Illustrator"];
const data = {};

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      Sometimes it pays to know how to use Adobe Illustrator. Maybe I should buy
      a laser cutter?
      <br />
      <br />
      <Images
        images={[
          `${imagePath}/lasercut/triangleearrings.JPG`,
          `${imagePath}/lasercut/diamondearrings.jpg`,
          `${imagePath}/lasercut/circleearrings.jpg`,
        ]}
      />
      <Images
        space
        images={[
          `${imagePath}/lasercut/cutdrawing.jpg`,
          `${imagePath}/lasercut/astrolabe_front.jpg`,
          `${imagePath}/lasercut/astrolabe_back.jpg`,
        ]}
      />
      <Images
        images={[
          `${imagePath}/lasercut/coasters.jpg`,
          `${imagePath}/lasercut/dogcat.jpg`,
          `${imagePath}/lasercut/allearrings.jpg`,
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
