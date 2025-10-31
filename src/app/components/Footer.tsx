export const Footer = () => {
  return (
    <footer className="w-full p-5 max-w-5xl m-auto border-t border-white/30 flex flex-col-reverse justify-between items-center mt-10 md:flex-row">
      <div className="flex justify-center items-center gap-5">
        <a
          className="flex items-center gap-2"
          href="https://ophircoder.com.br"
          aria-label="Site OphirCoder"
          rel="noreferrer"
        >
          <img
            className="w-8"
            src="/logo.png"
            alt="OphirCoder Logo"
          />
          <p className="text-center font-poppins text-gray-300 text-sm">
            © 2025 OphirCoder. Todos os direitos reservados.
          </p>
        </a>
      </div>
      <div className="mb-5 md:mb-0 flex justify-center items-center gap-5">
        <a
          href="https://github.com/bruno-kirashy"
          aria-label="GitHub Bruno Kirashy"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#999"
            className="hover:fill-amber-600/90 transition-colors duration-300 cursor-pointer"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-santos-silva-8091b6378/"
          aria-label="LinkedIn Bruno Kirashy"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="#999"
            className="hover:fill-amber-600/90 transition-colors duration-300 cursor-pointer"
            viewBox="0 0 256 256"
          >
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};
