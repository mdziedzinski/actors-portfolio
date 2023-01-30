import React from "react";
import { Parallax, Background } from "react-parallax";

const ArticleParallax = () => {
  return (
    <Parallax
      className="h-[50vh]"
      bgImage="../assets/hero-1.webp"
      bgImageAlt="the cat"
      strength={-500}
    >
      Content goes here. Parallax height grows with content height.
    </Parallax>
  );
};

export default ArticleParallax;
