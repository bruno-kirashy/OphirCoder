import { MenuMobile } from "./MenuMobile";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  return (
    <header className="z-10 w-full max-w-5xl m-auto h-20 p-4 flex justify-between items-center mt-4">
      <div className="cursor-pointer flex items-center gap-2">
        <a
          className="flex items-center gap-2"
          href="https://ophircoder.com.br"
          aria-label="Site OphirCoder"
          rel="noreferrer"
        >
          <img
            className="w-8"
            src="/images/OphirCoderLogo.png"
            alt="OphirCoder Logo"
          />
          <span className="text-[20px] font-poppins font-extrabold text-white">
            OphirCoder
          </span>
        </a>
      </div>
      <div>
        <NavMenu />
        {/* <MenuMobile /> */}
      </div>
    </header>
  );
};
