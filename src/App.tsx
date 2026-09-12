import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import type { TechnologiesType } from "./Types/TechnologiesType";

const loadTechnologies = async (): Promise<TechnologiesType[]> => {
  const response = await fetch("/technologies.json");

  if (!response.ok) {
    throw new Error("Failed to load technologies.");
  }

  const technologies = await response.json();
  return technologies;
};

// Keep this outside App
const technologiesPromise = loadTechnologies();

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies technologiesPromise={technologiesPromise} />
      <div className="h-75"></div>
    </>
  );
};

export default App;
