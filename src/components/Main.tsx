import React from "react";
import Article from "./Article";
import gbwideo from "../assets/gb_wideo.webm";

const heroClass1 =
  "flex items-center justify-center h-[50vh] w-screen bg-fixed bg-center bg-cover bg-hero1";
const heroClass2 =
  "flex items-center justify-center h-[50vh] w-screen bg-fixed bg-center bg-cover bg-hero2";
const heroClass3 =
  "flex items-center justify-center h-[50vh] w-screen bg-fixed bg-center bg-cover bg-hero3";
const heroClass4 =
  "flex items-center justify-center h-[50vh] w-screen bg-fixed bg-center bg-cover bg-hero4";

const Main = () => {
  return (
    <main className=" flex flex-col flex-wrap content-center justify-center">
      <header className="relative flex items-center justify-center h-[50vh] overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 min-w-full min-h-full max-w-none w-auto"
        >
          <source src={gbwideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </header>
      <Article id="1" className={heroClass1} title="Grzegorz Borowski">
        <p>
          ~start Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus doloribus, non fuga repellendus a reprehenderit consequatur
          totam. Consectetur quisquam repellat neque optio maxime, quas magni
          eligendi dolorem eaque placeat ad. Sint vero quibusdam, repudiandae ab
          assumenda sit at ut odio, eum id, ipsam obcaecati! Fugit, porro, quae
          libero commodi accusamus architecto deleniti at id laudantium,
          blanditiis explicabo repudiandae amet eius? Et, totam similique. Ab
          incidunt laudantium corporis iusto at quaerat! Obcaecati non
          doloremque expedita eveniet, impedit quo nisi quis repellat blanditiis
          enim, libero fugit placeat, unde nemo. Nostrum magnam quo labore.
          Aliquam asperiores distinctio natus itaque error molestiae nam eaque!
          end~
        </p>
      </Article>
      <Article id="2" className={heroClass2} title="O mnie"></Article>
      <Article id="3" className={heroClass3} title="Galeria"></Article>
      <Article id="4" className={heroClass4} title="Filmografia"></Article>
    </main>
  );
};

export default Main;
