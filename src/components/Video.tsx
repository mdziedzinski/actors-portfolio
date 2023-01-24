import React, {
  ElementType,
  ReactNode,
  useRef,
  useState,
  RefObject,
  MutableRefObject,
  SourceHTMLAttributes,
} from "react";
import { createSecureContext } from "tls";
import { flushSync } from "react-dom";
import ReadMore from "./ReadMore";
import { Declaration, JsxAttribute } from "typescript";

type Props = {
  id?: string;
  title?: string;
  video?: string;
  children?: JSX.Element | JSX.Element[];
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
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <>
      <div
        id={props.id}
        className="relative flex flex-col items-center justify-center h-screen overflow-hidden"
      >
        <h2 className="relative z-30 text-center mb-10 text-6xl text-white font-bold drop-shadow-lg ">
          {props.title}
        </h2>
        <button
          onClick={handleClick}
          className="relative  z-30 w-20 h-20 self-center  text-white border-dashed border-2 border-sky-500 font-semibold rounded-full drop-shadow-lg hover:bg-black hover:bg-opacity-50 hover:border-solid "
        >
          Zobacz video
        </button>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 min-w-full min-h-full max-w-none w-auto"
        >
          <source src={props.video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

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
    </>
  );
};

export default Video;
