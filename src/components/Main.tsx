import React, {
  ElementType,
  useEffect,
  ReactNode,
  useRef,
  useState,
  RefObject,
  MutableRefObject,
  Fragment,
} from "react";
import { createSecureContext } from "tls";
import { flushSync } from "react-dom";
import Article from "./Article";
import gbwideo from "../assets/gb_wideo.webm";
import Video from "./Video";
import Photos from "./Photos";
import ReCAPTCHA from "react-google-recaptcha";
import ReadMore from "./ReadMore";
import Contact from "./Contact";
import { ParallaxBanner } from "react-scroll-parallax";
import { GraphQLClient, gql, request } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextContent, ElementNode } from "@graphcms/rich-text-types";

import {
  RiMailLine,
  RiPhoneFill,
  RiVidicon2Fill,
  RiInstagramFill,
} from "react-icons/ri";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cldpzkyi32fpa01ul5krib2rx/master"
);

const styleContent =
  "[&_ul]:list-disc [&_ul]:m-6 [&_p]:m-4 [&_h2]:text-4xl [&_h2]:text-center w-screen  [&_iframe]:h-full  [&_iframe]:w-full  [&_iframe]:max-h-[90vh] [&_iframe]:max-w-[90vw]  [&_iframe]:aspect-video [&_iframe]:p-10  [&_a]:w-max [&_p]:w-max [&_a]:hover:text-sky-500";

const hero1 = "../assets/hero-1.webp";
const hero2 = "../assets/hero-2.webp";
const hero3 = "../assets/hero-3.webp";
const hero4 = "../assets/hero-4.webp";
const contacthero = "../assets/coontact.webp";

const Main = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        "https://api-eu-west-2.hygraph.com/v2/cldpzkyi32fpa01ul5krib2rx/master",
        `
      {
  posts {
    content {
      html,
      raw
    }
    id
    title
  }
}
    `
      );

      setPosts(posts);
    };

    fetchPosts();
  }, []);

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

  const renderContent = (number: number) => {
    if (posts.length === 0) {
      return <h2>Wczytywanie treści...</h2>;
    } else {
      return (
        <div
          className={styleContent}
          dangerouslySetInnerHTML={{
            __html: `${posts[number].content.html}`,
          }}
        />
      );
    }
  };

  if (posts.length === 0) {
    console.log(posts);
  } else {
    console.log(posts[0].content);
  }
  return (
    <>
      <main className="h-full w-full overflow-hidden flex flex-col flex-wrap content-center items-center justify-center ">
        <Video showMore="Zobacz moje demo" title="GRZEGORZ BOROWSKI">
          <div
            className="h-[65vh] w-screen
          p-3 
          aspect-video "
          >
            <iframe
              className="
        
          h-full
        w-full
        p-3
        
          aspect-video"
              src="https://www.youtube.com/embed/bkOzRHjofHE"
              title="Grzegorz Borowski - demo aktorskie | showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Video>
        {/* <Article
        bgImage={heroV}
        showMore="Zobacz moje demo"
        title="GRZEGORZ BOROWSKI"
      >
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
      </Article> */}
        <Article bgImage={hero1} showMore="Rozwiń" title="AUDIOBOOKI I DUBBING">
          <>{renderContent(0)}</>
        </Article>
        <Article showMore="Rozwiń" bgImage={hero2} title="GALERIA">
          <div className="flex flex-col m-2 justify-center p-2 w-full">
            <h2 className="text-4xl m-4 text-center ">Zdjęcia</h2>
            <Photos></Photos>
          </div>
        </Article>
        <Article showMore="Rozwiń" bgImage={hero3} title="O MNIE">
          <h2 className="text-4xl m-4 text-center ">O mnie</h2>
          <div className="p-5 m-4">
            <p>
              Jestem z wykształcenia aktorem. Skończyłem Akademię Sztuk
              Teatralnych we Wrocławiu.
            </p>
            Pracuję jako aktor teatralny, serialowy oraz głosowy (dubbing i
            audiobooki). Prowadzę również kanał na YouTube pt.: „Chodź na
            słówko”, który popularyzuje praktykę medytacji w codziennym życiu.
            Jeśli chciałabyś/ chciałbyś skontaktować się ze mną w sprawie
            współpracy, to zajrzyj do zakładki „Kontakt” :)
          </div>
        </Article>
        <Article showMore="Rozwiń" bgImage={hero4} title=' "Chodź na Słówko"'>
          <h2 className="text-4xl m-4 text-center ">
            Projekt „Chodź na słówko”
          </h2>
          <div className="p-5 m-4">
            <p>
              Od 2020 roku razem z Marcinem Dziedzińskim prowadzę kanał na
              YouTube pt.: Chodź na słówko.
            </p>
            <p>
              To projekt popularyzujący praktykę medytacji i ćwiczeń oddechowych
              w codziennym życiu. Na kanale znajdziesz mnóstwo prowadzonych
              przeze mnie prostych ćwiczeń, które pomogą Ci poradzić sobie ze
              stresem w ciągu dnia, a także medytacji, które pomogą Ci z
              zaśnięciem w nocy. Nasze nagrania są wyświetlane średnio 500 000
              razy miesięcznie, a sam kanał ma już ponad 70 000 subskrybentów.
            </p>
          </div>
          <a href="https://chodznaslowko.com/" className="m-4 p-3 text-center">
            Więcej informacji znajdziesz na naszej stronie internetowej:{" "}
            <span className="text-blue-500 underline">chodznaslowko.com</span>
          </a>
          <div className="flex justify-center h-full m-5">
            <iframe
              className=" 
        aspect-video
        h-full
        w-full
          m-4"
              src="https://www.youtube.com/embed/eNxTk8QT2s0"
              title="Chodź na słówko zwiastun kanału"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <iframe
              className=" 
              h-full
              w-full
        aspect-video
         
        m-4"
              src="https://www.youtube.com/embed/U_Xj8AMN0QU"
              title="Chodź na słówko wim hof"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Article>
        <Contact
          bgImage={contacthero}
          title="Kontakt"
          text={
            <div className="flex flex-col md:items-center items-start text-xl md:text-3xl w-full p-10">
              <span className="m-2"> Grzegorz Borowski</span>
              <span className="m-2 flex">
                <RiPhoneFill style={{ marginBlock: "5px", color: "#3b82f6" }} />
                <p className="mx-2"> 501 691 661</p>
              </span>
              <span className="m-2 flex ">
                <RiMailLine style={{ marginBlock: "5px", color: "#3b82f6" }} />
                <p className="mx-2"> grzesiek.borowski.mail@gmail.com</p>
              </span>
              <span className="m-2 flex">
                <RiVidicon2Fill
                  style={{ marginBlock: "5px", color: "#3b82f6" }}
                />
                <a
                  href="https://filmpolski.pl/fp/index.php?osoba=11133410"
                  className="mx-2 text-blue-500 "
                >
                  Profil na stronie FILMPOLSKI.PL
                </a>
              </span>
              <span className="m-2 flex">
                <RiInstagramFill
                  style={{ marginBlock: "5px", color: "#3b82f6" }}
                />
                <a
                  href="https://www.instagram.com/grzesiekborowski/"
                  className="mx-2  text-blue-500 "
                >
                  @grzesiekborowski
                </a>
              </span>
            </div>
          }
        ></Contact>
      </main>
    </>
  );
};

export default Main;
