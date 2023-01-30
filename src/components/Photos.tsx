import React from "react";
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface Photos {
  src: string;
  width: string;
  heigth: string;
}

const photos = [
  {
    src: "../assets/photos/im1.webp",
    width: 853,
    height: 1280,
  },
  {
    src: "../assets/photos/im2.webp",
    width: 853,
    height: 1280,
  },
  {
    src: "../assets/photos/im3.webp",
    width: 1280,
    height: 853,
  },
  {
    src: "../assets/photos/im4.webp",
    width: 1280,
    height: 853,
  },
  {
    src: "../assets/photos/im5.webp",
    width: 853,
    height: 1280,
  },
  {
    src: "../assets/photos/im6.webp",
    width: 853,
    height: 1280,
  },
  {
    src: "../assets/photos/im7.webp",
    width: 853,
    height: 1280,
  },
  {
    src: "../assets/photos/im8.webp",
    width: 853,
    height: 1280,
  },
  {
    src: "../assets/photos/im9.webp",
    width: 853,
    height: 1280,
  },
  {
    src: "../assets/photos/im10.webp",
    width: 853,
    height: 1280,
  },
  {
    src: "../assets/photos/im11.webp",
    width: 853,
    height: 1280,
  },
  {
    src: "../assets/photos/im12.jpeg",
    width: 853,
    height: 1280,
  },
  {
    src: "../assets/photos/im13.jpeg",
    width: 853,
    height: 1280,
  },
];

const slides = photos.map(({ src, width, height }) => ({
  src,
  width,
  height,
  srcSet: photos.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));

const Photos = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="w-full">
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default Photos;
