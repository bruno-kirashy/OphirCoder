import { DivSpace } from "./components/DivSpace";
import { IconeCSS } from "./components/Icons/IconeCSS";
import { IconeGit } from "./components/Icons/IconeGit";
import { IconeGithub } from "./components/Icons/IconeGithub";
import { IconeHTML } from "./components/Icons/IconeHTML";
import { IconeJavascript } from "./components/Icons/IconeJavascript";
import { IconeNext } from "./components/Icons/IconeNext";
import { IconeReact } from "./components/Icons/IconeReact";
import { IconeTailwind } from "./components/Icons/IconeTailwind";
import { IconeTypescript } from "./components/Icons/IconeTypescript";
import { IconeVercel } from "./components/Icons/IconeVercel";
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
        <DivSpace className="mx-10 md:mx-20">
          <IconeReact />
        </DivSpace>
        <DivSpace className="mx-10 md:mx-20">
          <IconeVercel />
        </DivSpace>
        <DivSpace className="mx-10 md:mx-20">
          <IconeNext />
        </DivSpace>
        <DivSpace className="mx-10 md:mx-20">
          <IconeTailwind />
        </DivSpace>
        <DivSpace className="mx-10 md:mx-20">
          <IconeTypescript />
        </DivSpace>
        <DivSpace className="mx-10 md:mx-20">
          <IconeGithub />
        </DivSpace>
        <DivSpace className="mx-10 md:mx-20">
          <IconeGit />
        </DivSpace>
        <DivSpace className="mx-10 md:mx-20">
          <IconeJavascript />
        </DivSpace>
        <DivSpace className="mx-10 md:mx-20">
          <IconeCSS />
        </DivSpace>
        <DivSpace className="mx-10 md:mx-20">
          <IconeHTML />
        </DivSpace>
      </Marquee>
    </section>
  );
};
