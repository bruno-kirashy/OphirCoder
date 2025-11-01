import { Metadata } from "next";
import { CardCreateAcount } from "./components/CardCreateAcount";

export const metadata: Metadata = {
  title: "Criar Conta",
};

const App = () => {
  return (
    <>
      <main className="flex flex-col flex-1">
        <section className="w-full text-white font-poppins flex flex-col justify-center items-center px-4 flex-1">
          <CardCreateAcount />
        </section>
      </main>
    </>
  );
};

export default App;
