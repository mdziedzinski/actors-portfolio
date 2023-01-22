import React from "react";
import Article from "./Article";

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
      <Article
        id="1"
        className={heroClass1}
        title="Grzegorz Borowski"
      ></Article>
      <Article id="2" className={heroClass2} title="O mnie"></Article>
      <Article id="3" className={heroClass3} title="Galeria"></Article>
      <Article id="4" className={heroClass4} title="Filmografia"></Article>
    </main>
  );
};

export default Main;
