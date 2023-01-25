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
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      <article id={props.id} className={props.className}>
        <div className="flex flex-col justify-center content-center item-center">
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
      </article>
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

export default Article;
