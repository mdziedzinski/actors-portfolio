import React, {
  ElementType,
  useEffect,
  ReactNode,
  useRef,
  useState,
  RefObject,
  MutableRefObject,
} from "react";
import { createSecureContext } from "tls";
import { flushSync } from "react-dom";
import Article from "./Article";
import gbwideo from "../assets/gb_wideo.webm";
import Video from "./Video";
import Photos from "./Photos";
import ReCAPTCHA from "react-google-recaptcha";
import ReadMore from "./ReadMore";

import ArticleParallax from "./ArticleParallax";
import { ParallaxBanner } from "react-scroll-parallax";

const hero1 = "../assets/hero-1.webp";
const hero2 = "../assets/hero-2.webp";
const hero3 = "../assets/hero-3.webp";
const hero4 = "../assets/hero-4.webp";

const Main = () => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event: any) => {
    flushSync(() => {
      setIsShown((current: any) => !current);
    });
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <main className=" flex flex-col flex-wrap content-center justify-center ">
      <Article bgImage={hero1} title="Title1">
        <p> To nie lorem</p>
      </Article>
      <Article bgImage={hero2} title="Title2">
        <p>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          facilis.
        </p>
      </Article>
      <Article bgImage={hero3} title="Title3" />
      <Article bgImage={hero4} title="Title4" />
      <Article bgImage={hero1} title="Title5" />
    </main>
  );
};

export default Main;
