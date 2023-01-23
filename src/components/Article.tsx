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

import ReadMore from "./ReadMore";

type Props = {
  className?: string;
  id?: string;
  title?: string;
  children?: JSX.Element | JSX.Element[];
};
const heroClass =
  "flex items-center justify-center h-[50vh] w-screen bg-fixed bg-center bg-cover bg-hero1";

const Article = (props: Props) => {
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
      <article id={props.id} className={props.className}>
        <div className="flex flex-col justify-center content-center item-center">
          <h2 className="text-center mb-10 text-5xl text-white font-bold drop-shadow-lg">
            {props.title}
          </h2>
          <button
            onClick={handleClick}
            className="w-24 h-24 self-center  bg-gray-800 text-white   hover:bg-gray-50/50 font-semibold border border-gray-400 rounded-full shadow"
          >
            Pokaż więcej
          </button>
        </div>
      </article>
      <div ref={ref}>
        {isShown && (
          <ReadMore>
            {props.children}
            <button
              className="m-5 w-24 h-24 self-center  bg-gray-800 text-white   hover:bg-gray-50/50 font-semibold border border-gray-400 rounded-full shadow"
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

export default Article;
