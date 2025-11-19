import Link from "next/link";
export const NavMenu = () => {
  return (
    <nav className="md:flex hidden">
      <ul className="flex gap-5 text-white font-inter font-normal text-[14px]">
        <li>
          <Link
            href="/"
            className="opacity-90 hover:opacity-100"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/servicos"
            className="opacity-90 hover:opacity-100"
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            href="/projetos"
            className="opacity-90 hover:opacity-100"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            href="/contato"
            className="opacity-90 hover:opacity-100"
          >
            Contato
          </Link>
        </li>
        <li className="transition-all duration-500 hover:scale-105">
          <Link
            href="/signin"
            className="btn-primary text-black font-bold bg-[rgb(249,123,6)] shadow-[0_4px_20px_0px_rgba(249,123,6,0.5)] shadow-[rgba(249,123,6,0.5)] px-5 py-2 rounded-lg hover:bg-orange-400 transition-transform hover:scale-105 duration-400 "
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
