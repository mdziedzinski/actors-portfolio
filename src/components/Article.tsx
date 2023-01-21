import React, { ReactNode, useRef, useState } from "react";

import ReadMore from "./ReadMore";

type Props = {
  className?: string;
  id?: string;
};
const heroClass =
  "flex items-center justify-center h-[50vh] w-screen bg-fixed bg-center bg-cover bg-hero1";

const Article = (props: Props) => {
  const myRef = useRef();
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event: any) => {
    setIsShown((current: any) => !current);
  };

  return (
    <>
      <article id={props.id} className={props.className}>
        <div className="flex flex-col justify-center content-center item-center">
          <h2 className="text-center mb-10 text-5xl text-white font-bold drop-shadow-lg">
            Grzegorz Borowski
          </h2>
          <button
            onClick={handleClick}
            className="self-center bg-transparent w-1/3  hover:bg-gray-50/50 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow"
          >
            Pokaż więcej
          </button>
        </div>
      </article>
      {isShown && <ReadMore ref={myRef}></ReadMore>}
    </>
  );
};

export default Article;
