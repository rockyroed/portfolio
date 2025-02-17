import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";

const App = () => {
  return (
    <div className="flex flex-col justify-center bg-background text-text mx-[16px]">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
