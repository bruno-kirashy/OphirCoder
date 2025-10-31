import Link from "next/link";
export const NavMenu = () => {
  return (
    <nav className="md:flex hidden">
      <ul className="flex gap-6 text-white font-inter font-light text-[16px]">
        <li>
          <Link
            href="/"
            className="opacity-80 hover:opacity-100"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/servicos"
            className="opacity-80 hover:opacity-100"
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            href="/sobre"
            className="opacity-80 hover:opacity-100"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            href="/contato"
            className="opacity-80 hover:opacity-100"
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};
