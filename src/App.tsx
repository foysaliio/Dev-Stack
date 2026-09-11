import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <div className="h-[300px]"></div>
    </>
  );
};

export default App;
