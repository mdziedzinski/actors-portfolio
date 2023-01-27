import React, {
  ElementType,
  ReactNode,
  useRef,
  useState,
  RefObject,
  MutableRefObject,
} from "react";
import { createSecureContext } from "tls";
import { flushSync } from "react-dom";
import { Parallax, Background } from "react-parallax";

import ReadMore from "./ReadMore";

type Props = {
  className?: string;
  id?: string;
  title?: string;
  bgImage?: string;
  bgImageAlt?: string;
  children?: JSX.Element | JSX.Element[];
  ref?: any;
};

const Article = (props: Props) => {
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
    <div>
      <Parallax strength={-200} className="h-[50vh] w-screen">
        <Background className="h-[50vh] w-screen">
          <img
            className=" w-screen h-[50vh]"
            src={props.bgImage}
            alt={props.bgImageAlt}
          ></img>
        </Background>
        <div className="flex flex-col justify-center content-center">
          <h2 className="text-center mb-10 text-6xl text-white font-bold drop-shadow-lg">
            {props.title}
          </h2>
          <button
            onClick={handleClick}
            className="w-20 h-20  self-center  text-white hover:bg-black hover:bg-opacity-50  border-dashed border-2  font-semibold rounded-full drop-shadow-lg "
          >
            Pokaż więcej
          </button>
        </div>
      </Parallax>
      <div ref={ref}>
        {isShown && (
          <ReadMore>
            {props.children}
            <button
              className="m-1 p-3 self-center  text-white hover:bg-black hover:bg-opacity-50  border  font-semibold rounded drop-shadow-lg"
              onClick={handleClick}
            >
              Ukryj sekcję
            </button>
          </ReadMore>
        )}
      </div>
    </div>
  );
};

export default Article;
