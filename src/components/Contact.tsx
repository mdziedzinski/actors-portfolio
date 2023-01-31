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
  text?: string | JSX.Element | JSX.Element[];
};

const Contact = (props: Props) => {
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
          { image: `${props.bgImage}`, speed: -25 },
          {
            speed: -15,
            children: (
              <>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className="md:text-7xl text-black text-center font-thin text-6xl m-10">
                    {props.title}
                  </h1>
                  <div className="flex flex-col justify-start items-start w-[43%]">
                    {props.text}
                  </div>
                </div>
              </>
            ),
          },
        ]}
        className="md:h-[65vh] h-screen"
      />
    </>
  );
};

export default Contact;
