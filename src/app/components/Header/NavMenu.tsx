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
      </ul>
    </nav>
  );
};
