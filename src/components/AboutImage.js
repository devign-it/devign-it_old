import React from "react";
/* TODO: source from Img */
import Img from "gatsby-image";

const AboutImage = ({ imageSource, textSource }) => {
  return (
    <figure className="about--picture">
      <img src={imageSource} alt="Profile picture of Daan van der Zwaag" />
      <blockquote>{textSource}</blockquote>
    </figure>
  );
};

export default AboutImage;
