import { Metadata } from "next";
import { CardLogin } from "./components/CardLogin";

export const metadata: Metadata = {
  title: "Login",
};

const App = () => {
  return (
    <>
      <main className="flex flex-col flex-1">
        <section className="w-full text-white font-poppins flex flex-col justify-center items-center px-4 flex-1">
          <CardLogin />
        </section>
      </main>
    </>
  );
};

export default App;
