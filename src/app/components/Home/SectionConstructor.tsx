import { IconeCSS } from "./components/IconeCSS";
import { IconeGit } from "./components/IconeGit";
import { IconeGithub } from "./components/IconeGithub";
import { IconeHTML } from "./components/IconeHTML";
import { IconeJavascript } from "./components/IconeJavascript";
import { IconeNext } from "./components/IconeNext";
import { IconeReact } from "./components/IconeReact";
import { IconeTailwind } from "./components/IconeTailwind";
import { IconeTypescript } from "./components/IconeTypescript";
import { IconeVercel } from "./components/IconeVercel";
import Marquee from "react-fast-marquee";
export const SectionConstructor = () => {
  return (
    <section className="m-auto md:mt-25 mt-15 flex flex-col items-center justify-center font-poppins">
      <h2 className="max-w-2xl text-3xl font-bold text-center mb-13">
        Construído com a Excelência das Melhores Tecnologias.
      </h2>
      <Marquee
        speed={60}
        className="w-full py-3 bg-linear-to-r from-amber-400/5 to-blue-400/10"
      >
        <div className="mx-10 md:mx-20">
          <IconeReact />
        </div>
        <div className="mx-10 md:mx-20">
          <IconeVercel />
        </div>
        <div className="mx-10 md:mx-20">
          <IconeNext />
        </div>
        <div className="mx-10 md:mx-20">
          <IconeTailwind />
        </div>
        <div className="mx-10 md:mx-20">
          <IconeTypescript />
        </div>
        <div className="mx-10 md:mx-20">
          <IconeGithub />
        </div>
        <div className="mx-10 md:mx-20">
          <IconeGit />
        </div>
        <div className="mx-10 md:mx-20">
          <IconeJavascript />
        </div>
        <div className="mx-10 md:mx-20">
          <IconeCSS />
        </div>
        <div className="mx-10 md:mx-20">
          <IconeHTML />
        </div>
      </Marquee>
    </section>
  );
};
