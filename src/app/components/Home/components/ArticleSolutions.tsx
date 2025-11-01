import { useInView } from "react-intersection-observer";

type ArticleSolutionsProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

export const ArticleSolutions = ({
  title,
  icon,
  description,
}: ArticleSolutionsProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex-1 bg-linear-to-br from-[rgb(249,123,6)]/60 via-[rgb(29,193,60)]/60 to-[#3b82f6]/60 rounded-[15px] p-0.5 hover:scale-102 cursor-pointer  hover:from-[rgb(249,123,6)] hover:to-[#3b82f6]  transition-opacity duration-500 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <article className="bg-linear-to-br from-gray-900/95 to-black backdrop-blur-md px-7 py-10 rounded-[15px] h-full">
        <span>{icon}</span>
        <h2 className="mt-5 font-bold">{title}</h2>
        <sub className="text-sm text-[#A1A1AA]">{description}</sub>
      </article>
    </div>
  );
};
