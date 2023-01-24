import React from "react";
import Article from "./Article";
import gbwideo from "../assets/gb_wideo.webm";
import Video from "./Video";

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
    <main className=" flex flex-col flex-wrap content-center justify-center overflow-hidden">
      <Video video={gbwideo} title="GRZEGORZ BOROWSKI">
        <div
          className="h-[90vh] w-[95vw] p-5
          aspect-square
          md:aspect-video"
        >
          <iframe
            className="
        
          h-full
          w-full
          aspect-square
          md:aspect-video"
            src="https://www.youtube.com/embed/bkOzRHjofHE"
            title="Grzegorz Borowski - demo aktorskie | showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Video>

      <Article id="1" className={heroClass1} title="AUDIOBOOKI I DUBBING">
        <div>
          <h2 className="text-4xl m-4 text-center ">Audiobooki</h2>
          <p>
            Przeczytanych przeze mnie książek możesz posłuchać w takich
            miejscach jak: Virtualo, Audioteka, Storytel, Empik Go.
          </p>
          <ul className="list-disc m-4 p-4">
            <li> James Clawell „Gai-Jin” </li>
            <li>Tomasz Kabarowski, Piotr Wójcik „Kryptowaluty od zera”</li>
            <li> Florian Konrad „Wypadowy - twór anormalny”</li>
            <li> Agata Czykierda-Grabowska „Felicja znaczy szczęście” </li>
            <li> Anna Rosłoniec „Zorza”</li> <li> Jacek Paśnik „Dzieci” </li>
            <li>Krzysztof Beśka „Przepustka do piekła”</li>
            <li>Krzysztof Beśka „Spowiedź w fotoplastikonie”</li>{" "}
            <li>Krzysztof Beśka „Rikszą do nieba”</li>
            <li> Krzysztof Beśka „Autoportret z samowarem”</li>
            <li> Richard Masland „Czego oczy nie widzą” </li>
            <li> Monika Skabara „Trzeci dziedzic. Dziedzictwo. Tom 3”</li>
            <li>Krzysztof Kasowski „Upadek króla rapu”</li>
            <li>John Scalzi „Upadające imperium” </li>
            <li>
              Andrzej Chwalba, Wojciech Harpula „Polska-Rosja. Historia obsesji,
              obsesja historii”{" "}
            </li>
            <li>Peter Wohlleben „Dotknij, poczuj, zobacz” </li>
            <li> Leon Windscheid „Po co ci emocje” </li>
            <li> Kazimierz Bilka-Arcikiewicz „Spisek”</li>
            <li>
              Jakub Wojtaszczyk „Cudowne przegięcie. Reportaż o polskim dragu.”
            </li>
          </ul>
          <h2 className="text-4xl m-4 text-center ">Dubbing</h2>
          <div
            className="h-[90vh] w-[95vw] p-5
          aspect-square
          md:aspect-video"
          >
            <iframe
              className="
        
          h-full
          w-full
          aspect-square
          md:aspect-video"
              src="https://www.youtube.com/embed/9mP3G9BqXUo"
              title="Grzegorz Borowski - demo dubbing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="text-3xl m-4 text-center ">Role dubbingowe</h3>
          <a
            className="block text-center hover:text-sky-500"
            href="https://dubbingpedia.pl/wiki/Grzegorz_Borowski"
          >
            Zobacz moje role na Dubbingopedia
          </a>
          <a
            className="block text-center hover:text-sky-500"
            href="https://www.filmweb.pl/person/Grzegorz+Borowski-259387"
          >
            Zobacz moje role na Filmweb
          </a>
        </div>
      </Article>
      <Article id="2" className={heroClass2} title="O mnie"></Article>
      <Article id="3" className={heroClass3} title="Galeria"></Article>
      <Article id="4" className={heroClass4} title="Filmografia"></Article>
    </main>
  );
};

export default Main;
