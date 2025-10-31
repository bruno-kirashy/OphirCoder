"use client";

import { SectionConstructor } from "./components/Home/SectionConstructor";
import { SectionHome } from "./components/Home/SectionHome";
import { SectionSolutions } from "./components/Home/SectionSolutions";

const App = () => {
  return (
    <main>
      <SectionHome />
      <SectionSolutions />
      <SectionConstructor />
    </main>
  );
};

export default App;
