import { useEffect, useRef, useState, MutableRefObject } from "react";

import { flushSync } from "react-dom";
import Article from "./Article";

import Video from "./Video";
import Photos from "./Photos";

import Contact from "./Contact";

import { request } from "graphql-request";

import {
  RiMailLine,
  RiPhoneFill,
  RiVidicon2Fill,
  RiInstagramFill,
} from "react-icons/ri";

const styleContent =
  "[&_ul]:list-disc [&_ul]:m-6 [&_p]:m-4 [&_h2]:text-4xl [&_h2]:text-center w-screen  [&_iframe]:h-full  [&_iframe]:w-full  [&_iframe]:max-h-[90vh]  [&_iframe]:md:aspect-video [&_iframe]:aspect-square  [&_iframe]:p-4  [&_a]:w-max [&_p]:w-max [&_a]:hover:text-sky-500 container mx-auto [&_p]:max-w-full m-4 max-w-[100%] [&_iframe]:block p-4";

const hero1 = "../assets/hero-1.webp";
const hero2 = "../assets/hero-2.webp";
const hero3 = "../assets/hero-3.webp";
const hero4 = "../assets/hero-4.webp";
const contacthero = "../assets/coontact.webp";

interface ProcessEnv {
  [key: string]: string | undefined;
}

const Main = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const hygraphAPI: string = process.env.REACT_APP_HYGRAPH_API ?? "default";

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        hygraphAPI,
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

  return (
    <>
      <main className="flex h-full w-full flex-col flex-wrap content-center items-center justify-center overflow-hidden ">
        <Video showMore="Zobacz moje demo" title="GRZEGORZ BOROWSKI">
          <div
            className={styleContent}
            //   className="aspect-video h-[65vh]
            // w-screen
            // p-3 "
          >
            <iframe
              //       className="

              //   aspect-video
              // h-full
              // w-full

              //   p-3"
              src="https://www.youtube.com/embed/bkOzRHjofHE"
              title="Grzegorz Borowski - demo aktorskie | showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Video>

        <Article bgImage={hero1} showMore="Rozwiń" title="AUDIOBOOKI I DUBBING">
          <>{renderContent(0)}</>
        </Article>
        <Article showMore="Rozwiń" bgImage={hero2} title="GALERIA">
          <div className="m-2 flex w-full flex-col justify-center p-2">
            <h2 className="m-4 text-center text-4xl ">Zdjęcia</h2>
            <Photos></Photos>
          </div>
        </Article>
        <Article showMore="Rozwiń" bgImage={hero3} title="O MNIE">
          <div>{renderContent(1)}</div>
        </Article>
        <Article showMore="Rozwiń" bgImage={hero4} title=' "Chodź na Słówko"'>
          <div>{renderContent(2)}</div>

          <div className="m-5 flex h-full justify-center">
            <iframe
              className=" 
        m-4
        aspect-video
        h-full
          w-full"
              src="https://www.youtube.com/embed/eNxTk8QT2s0"
              title="Chodź na słówko zwiastun kanału"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <iframe
              className=" 
              m-4
              aspect-video
        h-full
         
        w-full"
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
            <div className="flex w-full flex-col items-start p-10 text-xl md:items-center md:text-3xl">
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
