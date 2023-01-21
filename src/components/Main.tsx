import React from "react";
import Article from "./Article";

const heroClass =
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
      <Article id="1" className={heroClass}></Article>
      <Article id="2" className={heroClass2}></Article>
      <Article id="3" className={heroClass3}></Article>
      <Article id="4" className={heroClass4}></Article>
      <Article></Article>
    </main>
  );
};

export default Main;
