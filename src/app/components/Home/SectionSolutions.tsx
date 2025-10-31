import { ArticleSolutions } from "./components/ArticleSolutions";
import { IconeDevelopment } from "./components/IconeDevelopment";
import { IconeRocket } from "./components/IconeRocket";
import { IconeServerDNS } from "./components/IconeServerDNS";

export const SectionSolutions = () => {
  return (
    <section className="max-w-5xl m-auto md:mt-30 mt-10 flex flex-col items-center justify-center font-poppins">
      <h2 className="text-3xl font-bold text-center mb-13">
        Ecossistema de Soluções.
      </h2>

      <div className="flex md:flex-row flex-col md:gap-6 gap-8 justify-center p-4">
        <ArticleSolutions
          title="Development"
          description="Aplicações e soluções web customizadas, construídas com tecnologias modernas para performance otimizada."
          icon={<IconeDevelopment />}
        />
        <ArticleSolutions
          title="Deploy & Infrastructure"
          description="Deploy contínuo e infraestrutura robusta nas principais plataformas
            de nuvem do mercado."
          icon={<IconeRocket />}
        />
        <ArticleSolutions
          title="DNS Management"
          description="Gerenciamento de DNS confiável e performático para garantir
            disponibilidade e velocidade global."
          icon={<IconeServerDNS />}
        />
      </div>
    </section>
  );
};
