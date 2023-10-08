import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { imagePath } from "./ProjectCommon";
import Images from "./Images";

const name = 'rpiups';
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

export default function Component() {
  return (
    <ProjectTemplate title={title} data={data}>
      <Images
        images={[
          `${imagePath}/hexapod/hexapod_isometric.JPG`,
          `${imagePath}/hexapod/hexapod_2.jpg`,
          `${imagePath}/hexapod/hexapod_3.jpg`,
        ]}
      />
      This robot was made for the final project of Tufts ME-134 (Advanced
      Robotics) in the Fall of 2020. The prompt was to create a robot capable of
      navigating an obstacle course (comprised of a tunnel to go through, a wall
      to climb over, and a patch of rough terrain) autonomously. This hexapod
      uses a Raspberry Pi 4 (and camera) to perform the onboard processing and
      18 high-torque servo motors for actuation. It did pretty well on the wall.
      <Images
        space
        images={[
          `${imagePath}/hexapod/hexapod_1.jpg`,
          `${imagePath}/hexapod/hexapod_4.jpg`,
          `${imagePath}/hexapod/hexapod_5.jpg`,
        ]}
      />
      <Images
        images={[
          `${imagePath}/hexapod/hexapod_6.jpg`,
          `${imagePath}/hexapod/hexapod_7.jpg`,
          `${imagePath}/hexapod/hexapod_8.jpg`,
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
