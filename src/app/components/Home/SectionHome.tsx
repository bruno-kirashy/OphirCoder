import Link from "next/link";

export const SectionHome = () => {
  return (
    <>
      <section className="w-full max-w-5xl  p-4 m-auto overflow-x-hidden overflow-y-hidden text-white font-poppins flex flex-col gap-6 items-center justify-center">
        <h2 className="w-full mt-16 font-bold font-poppins text-4xl sm:text-5xl md:text-6xl md:mt-24 text-center [text-shadow:0_0_20px_rgba(255,255,255,0.4)]">
          Construindo o Futuro da Web. Da Ideia ao Deploy Global.
        </h2>
        <p className="w-full max-w-full sm:max-w-[90%]  text-[15px] font-poppins font-light md:text-lg md:max-w-2xl text-[#A1A1AA] text-center">
          Soluções completas em Desenvolvimento, Deploy e Infraestrutura DNS.
          Entregamos performance, não apenas código.
        </p>
        <div className="w-full flex gap-6 mt-10 mb-10 flex-wrap items-center justify-center">
          <Link
            href="/sigin"
            className="btn-primary text-black font-bold bg-[rgb(249,123,6)] shadow-[0_4px_20px_0px_rgba(249,123,6,0.5)] shadow-[rgba(249,123,6,0.5)] px-5 py-3 rounded-lg hover:bg-orange-500 transition-transform hover:scale-105 duration-400"
          >
            Iniciar Projeto
          </Link>
          <Link
            className="btn-primary text-white border border-white/40 font-bold  px-6 py-3 rounded-lg  hover:bg-linear-to-r from-yellow-300 to-blue-500 transition-transform duration-400"
            href="/servicos"
          >
            Ver Serviços
          </Link>
        </div>
      </section>
    </>
  );
};
