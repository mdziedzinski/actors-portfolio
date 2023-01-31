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
import { ParallaxBanner } from "react-scroll-parallax";
import { RxCaretDown } from "react-icons/rx";

import ReadMore from "./ReadMore";

type Props = {
  className?: string;
  id?: string;
  title?: string;
  showMore?: string;
  bgImage?: string;
  bgImageAlt?: string;
  children?: JSX.Element | JSX.Element[];
  ref?: any;
  speed?: string;
};

const Video = (props: Props) => {
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
    <>
      <ParallaxBanner
        layers={[
          {
            speed: -15,
            children: (
              <>
                <video
                  className="w-screen h-screen object-cover"
                  autoPlay
                  muted
                  loop
                  id="myVideo"
                >
                  <source src="../assets/gb_wideo.mp4" type="video/mp4" />
                </video>
                <div className="w-screen h-[65vh] absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className="z-11 md:text-7xl text-white text-center font-thin text-6xl m-10">
                    {props.title}
                  </h1>
                  <button
                    onClick={handleClick}
                    className="z-12 transition ease-in-out delay-150 hover:scale-110 flex flex-col  justify-center items-center  text-md  text-white    font-normal  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg "
                  >
                    <p className=" text-md  text-white  font-semibold   ">
                      {props.showMore}
                    </p>
                    <RxCaretDown className="w-[30px] h-[30px]" />
                  </button>
                </div>
              </>
            ),
          },
        ]}
        className="h-[65vh] o"
      ></ParallaxBanner>
      <div ref={ref}>
        {isShown && (
          <ReadMore>
            {props.children}
            <button
              className="m-1 p-3 self-center  text-white hover:bg-black hover:bg-opacity-50 border-2 border-sky-600  font-semibold rounded drop-shadow-lg"
              onClick={handleClick}
            >
              Ukryj sekcję
            </button>
          </ReadMore>
        )}
      </div>
    </>
  );
};

export default Video;
