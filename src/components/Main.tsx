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
import Article from "./Article";
import gbwideo from "../assets/gb_wideo.webm";
import Video from "./Video";
import Photos from "./Photos";
import ReCAPTCHA from "react-google-recaptcha";
import ReadMore from "./ReadMore";

import ArticleParallax from "./ArticleParallax";
import { ParallaxBanner } from "react-scroll-parallax";

const heroV = "../assets/hero-v.gif";
const hero1 = "../assets/hero-1.webp";
const hero2 = "../assets/hero-2.webp";
const hero3 = "../assets/hero-3.webp";
const hero4 = "../assets/hero-4.webp";

const Main = () => {
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
    <main className=" flex flex-col flex-wrap content-center justify-center ">
      <Article bgImage={heroV} title="GRZEGORZ BOROWSKI">
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
      </Article>
      <Article bgImage={hero1} title="AUDIOBOOKI I DUBBING">
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
            className="block text-center hover:text-sky-500 m-3"
            href="https://dubbingpedia.pl/wiki/Grzegorz_Borowski"
          >
            ▸Zobacz moje role na Dubbingopedia
          </a>
          <a
            className="block text-center hover:text-sky-500 m-3"
            href="https://www.filmweb.pl/person/Grzegorz+Borowski-259387"
          >
            ▸Zobacz moje role na Filmweb
          </a>
        </div>
      </Article>
      <Article bgImage={hero2} title="GALERIA">
        <div className="flex justify-center p-5 w-full">
          <h2 className="text-4xl m-4 text-center ">Zdjęcia</h2>
          <Photos></Photos>
        </div>
      </Article>
      <Article bgImage={hero3} title="O MNIE">
        <h2 className="text-4xl m-4 text-center ">O mnie</h2>
        <div className="p-5 m-4">
          <p>
            Jestem z wykształcenia aktorem.Skończyłem Akademię Sztuk Teatralnych
            we Wrocławiu.
          </p>
          Pracuję jako aktor teatralny, serialowy oraz głosowy (dubbing i
          audiobooki). Prowadzę również kanał na YouTube pt.: „Chodź na słówko”,
          który popularyzuje praktykę medytacji w codziennym życiu. Jeśli
          chciałabyś/ chciałbyś skontaktować się ze mną w sprawie współpracy, to
          zajrzyj do zakładki „Kontakt” :)
        </div>
      </Article>
      <Article bgImage={hero4} title=' "Chodź na Słówko"'>
        <h2 className="text-4xl m-4 text-center ">Projekt „Chodź na słówko”</h2>
        <div className="p-5 m-4">
          <p>
            Od 2020 roku razem z Marcinem Dziedzińskim prowadzę kanał na YouTube
            pt.: Chodź na słówko.
          </p>
          <p>
            To projekt popularyzujący praktykę medytacji i ćwiczeń oddechowych w
            codziennym życiu. Na kanale znajdziesz mnóstwo prowadzonych przeze
            mnie prostych ćwiczeń, które pomogą Ci poradzić sobie ze stresem w
            ciągu dnia, a także medytacji, które pomogą Ci z zaśnięciem w nocy.
            Nasze nagrania są wyświetlane średnio 500 000 razy miesięcznie, a
            sam kanał ma już ponad 70 000 subskrybentów.
          </p>
        </div>
        <div
          className="h-[50vh] w-[90vw] p-5
          aspect-square
          md:aspect-video"
        >
          <iframe
            className=" 
        
          h-full
          w-full
          aspect-square
          md:aspect-video m-4"
            src="https://www.youtube.com/embed/eNxTk8QT2s0"
            title="Chodź na słówko zwiastun kanału"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="h-[50vh] w-[90vw] p-5
          aspect-square
          md:aspect-video"
        >
          <iframe
            className=" 
        
          h-full
          w-full
          aspect-square
          md:aspect-video m-4"
            src="https://www.youtube.com/embed/U_Xj8AMN0QU"
            title="Chodź na słówko wim hof"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <a href="" className="m-4 p-3 text-center">
          Więcej informacji znajdziesz na naszej stronie internetowej:
          chodznaslowko.com
        </a>
      </Article>
      <Article bgImage={hero1} title="Kontakt" />
    </main>
  );
};

export default Main;
